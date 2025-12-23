'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const resolvedTheme = useMemo(() => {
    if (!mounted) return 'light';
    return theme;
  }, [theme, mounted]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href.replace('/#', '/'));
  };

  const surfaceStyles = {
    background: resolvedTheme === 'dark' ? 'rgba(13, 17, 28, 0.92)' : 'rgba(255, 255, 255, 0.88)',
    border: '1px solid var(--border-soft)',
    boxShadow: 'var(--shadow-soft)',
  } as const;

  const subtleSurface = {
    background: resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(14, 19, 32, 0.04)',
    border: '1px solid rgba(14, 19, 32, 0.08)',
  } as const;

  return (
    <nav className="fixed inset-x-0 top-0 z-50" style={{ backdropFilter: 'blur(14px)' }}>
      <div className="container-custom" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.6rem 1rem',
            borderRadius: '999px',
            ...surfaceStyles,
          }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #2f52ff 0%, #15aabf 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              SH
            </div>
            <span className="hidden sm:block" style={{ fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>
              Shamkhal Hajiyev
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium"
                style={{
                  color: isActive(item.href) ? 'var(--primary)' : 'var(--text-muted)',
                  position: 'relative',
                }}
              >
                {item.name}
                {isActive(item.href) && (
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: '-0.45rem',
                      height: '3px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #2f52ff 0%, #15aabf 100%)',
                    }}
                  />
                )}
              </Link>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  padding: '0.55rem',
                  borderRadius: '12px',
                  ...subtleSurface,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M21 12.79A9 9 0 1111.21 3 6.5 6.5 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
            style={{
              padding: '0.55rem',
              borderRadius: '12px',
              ...subtleSurface,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div
            className="md:hidden"
            style={{
              marginTop: '0.75rem',
              padding: '1rem',
              borderRadius: '24px',
              ...surfaceStyles,
              display: 'grid',
              gap: '0.75rem',
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '0.75rem 0.9rem',
                  borderRadius: '16px',
                  background: isActive(item.href) ? 'rgba(47, 82, 255, 0.12)' : subtleSurface.background,
                  border: subtleSurface.border,
                  color: isActive(item.href) ? 'var(--primary)' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {item.name}
              </Link>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  padding: '0.75rem 0.9rem',
                  borderRadius: '16px',
                  ...subtleSurface,
                  fontWeight: 600,
                }}
              >
                Toggle theme
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
