import Card from './Card'

import {SiJavascript} from 'react-icons/si'

export default function Projects() {
  return (
    <>
      <h2 className="mb-10 text-center text-5xl">Projects Portfolio</h2>
      <div className="m-5 grid grid-flow-col grid-rows-1 content-center justify-center gap-4 gap-x-9 bg-white dark:bg-gray-900">
        <div className="">
          <Card
            img="/Passgenerator.png"
            url="https://passgeneretor.blagabo.com"
            title="Password Generator"
            description="Pagina para generar Password aleatorios con una Longitud deseada con Simbolos, Números, Mayusculas, Minusculas"
            github="https://github.com/Blagabo/ProyectosJS"
            technologies={<SiJavascript className="h-9 w-9 text-yellow-300" />}
          />
        </div>
        <div>
          <Card
            img="/Qrgenerator.png"
            url="https://qrgeneretor.blagabo.com"
            title="QR Generator"
            description="Pagina para generar Codigos QR con un texto o URL"
            github="https://github.com/Blagabo/ProyectosJS"
            technologies={<SiJavascript className="h-9 w-9 text-yellow-300" />}
          />
        </div>
      </div>
    </>
  )
}
