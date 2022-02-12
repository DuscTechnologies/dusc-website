import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dusc Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="welcome to dusc" />
        <p className="description">
          launching soon 👀
        </p>
      </main>

      <Footer />
    </div>
  )
}
