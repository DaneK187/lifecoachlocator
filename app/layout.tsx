import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Content from head.tsx will auto-inject here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
