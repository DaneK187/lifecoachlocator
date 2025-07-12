// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Preload Calendly if you like */}
      <link
        rel="preload"
        href="https://assets.calendly.com/assets/external/widget.js"
        as="script"
      />
      {/* Do NOT put <Script> here */}
    </>
  );
}


