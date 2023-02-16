import '../../styles/globals.css'
import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <body>

        {/*  header */}
        <Header />
        {/*  Banner */}
        {children}</body>
    </html>
  )
}
