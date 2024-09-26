export const metadata = {
    title: 'Project Management',
    description: 'A simple project management app with Next.js and Firebase',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  }