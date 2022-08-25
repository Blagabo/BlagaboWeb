import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-4 place-self-center lg:col-span-6">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight dark:text-white md:text-3xl xl:text-4xl">
            Hi, I am Gabriel Blanco
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            A Full-Stack Developer
          </p>
          <a
            href="/CV_GABRIEL_BLANCO.pdf"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-lg font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            Download CV
          </a>
        </div>
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex">
          <Image
            src="/ezgif.com-gif-maker.png"
            height={600}
            width={750}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
