import Image from 'next/image'

export default function Card({
  img,
  url,
  title,
  description,
  github,
  technologies
}) {
  return (
    <>
      <div className="mb-10 max-w-sm cursor-pointer rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:mb-0">
        <a href={url}>
          <Image
            className="rounded-t-lg "
            src={img}
            width={400}
            height={328}
            priority
          />
        </a>
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              {title}
            </h5>
          </a>
          <p className="mb-3 p-3 text-xs font-normal text-gray-700 dark:text-gray-400 sm:text-base">
            {description}
          </p>
          <div className="grid grid-cols-4 items-center gap-1">
            <div className="col-span-3 mt-2">
              <a href={github} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="mr-2 mb-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  GitHub
                </button>
              </a>
            </div>
            <div className="justify-self-center">{technologies}</div>
          </div>
        </div>
      </div>
    </>
  )
}
