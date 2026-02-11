import { Bricolage_Grotesque, Montserrat, Lusitana } from 'next/font/google'

export const bricolage = Bricolage_Grotesque({ subsets: ['latin'] })

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
})
