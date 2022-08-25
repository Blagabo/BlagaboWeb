import {FaTwitter, FaGithub, FaWhatsapp, FaDiscord} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex justify-center space-x-6">
              <a
                className="text-blue-500 hover:text-opacity-75"
                href="https://twitter.com/blagabo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="h-8 w-8" />
              </a>

              <a
                className="text-white hover:text-opacity-75"
                href="https://github.com/Blagabo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-8 w-8" />
              </a>

              <a
                className="text-lime-500 hover:text-opacity-75"
                href="https://wa.me/34665626511"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <FaWhatsapp className="h-8 w-8" />
              </a>
              <a
                className="text-white hover:text-opacity-75"
                href="https://discord.gg/jgMFejS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord "
              >
                <FaDiscord className="h-8 w-8" />
              </a>
            </div>

            <p className="mx-auto max-w-lg text-sm text-gray-500">
              © 2022. Next.js & Tailwind CSS Portfolio . Developed by Blagabo
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
