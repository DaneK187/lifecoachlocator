// app/head.tsx
import Script from 'next/script';

export default function Head() {
  return (
    <>
      {/* 1) Preload Calendly */}
      <link
        rel="preload"
        href="https://assets.calendly.com/assets/external/widget.js"
        as="script"
      />

      {/* 2) Load GA library before React hydration */}
      <Script
        id="ga4-library"
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-9PRKQ9Q4BF"
      />

      {/* 3) Initialize dataLayer + gtag before hydration */}
      <Script id="ga4-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-9PRKQ9Q4BF', {
            send_page_view: false // we’ll do manual page_view events
          });
        `}
      </Script>
    </>
  );
}

