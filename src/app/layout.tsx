import './globals.scss'

export const metadata = {
  title: 'Mohamed Irfan',
  description: 'Porfolio - Mohamed Irfan Shafi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
