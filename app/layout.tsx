import Navigation from "../components/navigation"

export const metadata = {
  description: 'The best movies on the best frameworks',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
