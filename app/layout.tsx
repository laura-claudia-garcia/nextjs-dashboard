import '@/app/ui/global.css'
import { bricolage } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>{children}</body>
    </html>
  )
}
