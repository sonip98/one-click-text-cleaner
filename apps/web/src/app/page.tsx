import Link from 'next/link'
import Hero from '../app/components/Hero'
import FeatureList from '../app/components/FeatureList'
import Footer from '../app/components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <main className="flex-1 py-10 px-6 max-w-4xl mx-auto">
        <FeatureList />
        <div className="text-center mt-10">
          <Link
            href="/text-cleaner"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            🚿 Try the Cleaner Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
