import PageLayout from '../components/PageLayout'

export default function NotFound() {
  return (
    <PageLayout title="Error 404">
      <section className="h-[100vh] w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
          <div className="mx-auto mt-[25vh] max-w-screen-sm text-center">
            <h1 className="mb-4 text-8xl font-extrabold tracking-tight text-blue-600 dark:text-blue-500 lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Not Found
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo sentimos, no podemos encontrar esa página. Encontrará mucho que
              explorar en la página de inicio.{' '}
            </p>
            <a
              href="/"
              className="my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Volver a Home
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
