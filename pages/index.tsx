import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import SubscriptionTiers from '../components/SubscriptionTiers';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <SubscriptionTiers />
    </main>
  )
}