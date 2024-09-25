// src/app/layout.js
export const metadata = {
    title: 'Project Management',
    description: 'A simple project management app with Next.js and Firebase',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>Project Management Dashboard</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>Project Management</p>
          </footer>
        </body>
      </html>
    );
  }