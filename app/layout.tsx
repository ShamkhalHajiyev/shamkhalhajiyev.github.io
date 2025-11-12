import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shamkhal Hajiyev — Data Science Specialist',
  description: 'Portfolio of Shamkhal Hajiyev, Data Science Specialist at Align Technology. Expert in machine learning, forecasting, and advanced analytics.',
  keywords: ['Shamkhal Hajiyev', 'Data Scientist', 'Machine Learning Engineer', 'Azure ML', 'Databricks', 'PySpark'],
  authors: [{ name: 'Shamkhal Hajiyev' }],
  openGraph: {
    title: 'Shamkhal Hajiyev — Data Science Specialist',
    description: 'Expert in machine learning, forecasting, and advanced analytics.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
