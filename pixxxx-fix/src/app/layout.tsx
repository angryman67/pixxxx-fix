import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'pixxxx.de – Von Fotografen. Für Fotografen.', template: '%s | pixxxx.de' },
  description: 'Die Fotografen-Community im DACH-Raum.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: '#0A0A08', color: '#F0EDE8', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 40px',
          background: 'rgba(10,10,8,0.88)',
          backdropFilter: 'blur(20px)',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
        }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', letterSpacing: '3px', color: '#F0EDE8', textDecoration: 'none' }}>
            pixx<span style={{ color: '#D85A30' }}>xx</span>.de
          </a>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="/" style={{ fontSize: '13px', color: '#888780', textDecoration: 'none' }}>Community</a>
            <a href="/locations" style={{ fontSize: '13px', color: '#888780', textDecoration: 'none' }}>Locations</a>
            <a href="/jobs" style={{ fontSize: '13px', color: '#888780', textDecoration: 'none' }}>Jobs</a>
            <a href="/upload" style={{ fontSize: '13px', color: '#888780', textDecoration: 'none' }}>Upload</a>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="/auth/signin" style={{ background: 'none', border: '0.5px solid rgba(255,255,255,0.18)', borderRadius: '8px', padding: '7px 18px', fontSize: '13px', color: '#F0EDE8', textDecoration: 'none' }}>
              Anmelden
            </a>
            <a href="/auth/signin" style={{ background: '#D85A30', borderRadius: '8px', padding: '7px 18px', fontSize: '13px', color: '#fff', fontWeight: 500, textDecoration: 'none' }}>
              Kostenlos starten
            </a>
          </div>
        </nav>
        {children}
        <footer style={{ padding: '32px 40px', borderTop: '0.5px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '3px' }}>
            pixx<span style={{ color: '#D85A30' }}>xx</span>.de
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '12px', color: '#888780', textDecoration: 'none' }}>Impressum</a>
            <a href="#" style={{ fontSize: '12px', color: '#888780', textDecoration: 'none' }}>Datenschutz</a>
            <a href="#" style={{ fontSize: '12px', color: '#888780', textDecoration: 'none' }}>AGB</a>
            <a href="#" style={{ fontSize: '12px', color: '#888780', textDecoration: 'none' }}>Kontakt</a>
          </div>
          <div style={{ fontSize: '12px', color: '#888780' }}>© 2026 pixxxx.de</div>
        </footer>
      </body>
    </html>
  )
}
