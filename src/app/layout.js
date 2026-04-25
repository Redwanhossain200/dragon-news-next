import './globals.css';

export const metadata = {
  title: 'Dragon News',
  description: 'Best news portal in Bangladesh',
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
