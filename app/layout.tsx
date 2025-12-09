import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Shamkhal Hajiyev — Data Science & ML Engineering',
    template: '%s | Shamkhal Hajiyev',
  },
  description: 'Data Scientist & ML Engineer specializing in production ML systems, forecasting, and analytics automation. 4+ years building scalable solutions with Azure ML, Python, and enterprise-grade MLOps.',
  keywords: ['Shamkhal Hajiyev', 'Data Scientist', 'Machine Learning Engineer', 'Azure ML', 'Databricks', 'PySpark', 'MLOps', 'Forecasting', 'Churn Prediction', 'Poland'],
  authors: [{ name: 'Shamkhal Hajiyev', url: 'https://shamkhalhajiyev.github.io' }],
  creator: 'Shamkhal Hajiyev',
  metadataBase: new URL('https://shamkhalhajiyev.github.io'),
  openGraph: {
    title: 'Shamkhal Hajiyev — Data Science & ML Engineering',
    description: 'Elevating decision intelligence with production-ready machine learning. Expert in forecasting, churn prediction, and enterprise analytics.',
    url: 'https://shamkhalhajiyev.github.io',
    siteName: 'Shamkhal Hajiyev Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shamkhal Hajiyev — Data Science & ML Engineering',
    description: 'Elevating decision intelligence with production-ready machine learning.',
  },
  robots: {
    index: true,
    follow: true,
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
