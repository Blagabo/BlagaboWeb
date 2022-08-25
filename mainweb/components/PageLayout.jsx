import Head from 'next/head'

export default function PageLayout({children, title = 'Blagabo'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio Blagabo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">{children}</main>
    </>
  )
}
