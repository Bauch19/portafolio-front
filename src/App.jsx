import { useState } from 'react'
import logoB from './assets/logo-b.svg'
import banner from './assets/banner-portafolio.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex justify-between items-center px-5'>
        <div className='max-[740px]:flex max-[740px]:justify-center max-[740px]:w-full'>
          <img src={logoB} className='w-[50px] h-auto' alt="logo" />
        </div>
        <nav class="max-[740px]:hidden">
          <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
              <a href="#" class="text-[#DBAB00] border-b-2 border-[#DBAB00] mx-1.5 sm:mx-6">Inicio</a>
              <a href="#sobre-mi" class="border-b-2 border-transparent hover:text-[#DBAB00] transition-colors hover:border-[#DBAB00] mx-1.5 sm:mx-6">Sobre mí</a>
              <a href="#" class="border-b-2 border-transparent hover:text-[#DBAB00] transition-colors hover:border-[#DBAB00] mx-1.5 sm:mx-6">Proyectos</a>
          </div>
        </nav>
      </header>
      <div className='h-[100vh]'>
        <div className='relative w-full h-[655px] flex justify-center lg:items-center px-[2em]'>
          <div className='bg-no-repeat w-full h-full flex flex-col lg:justify-center lg:items-center px-[2em] rounded-[2em] object-cover lg:object-contain max-[740px]:pt-[50px]' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center' }}>
            <h1 className='relative flex flex-col justify-center items-center uppercase font-[900] lg:text-[7rem]'>
              Portafolio
              <span className='font-[Blacksword] capitalize text-[#DBAB00] text-[3rem] lg:text-[4rem] absolute lg:right-0 top-9 lg:top-[5.5rem]'>
                Bauch Ventura
              </span>
            </h1>
          </div>
          <div className='absolute bottom-0 border border-[#DBAB00] text-[#DBAB00] w-[60px] h-[60px] flex justify-center items-center rounded-[50rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='text-[#DBAB00] w-7 h-auto' color="#000000" fill="none">
              <path d="M12 20L12 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className='relative w-full h-[100vh]' id='sobre-mi'>
        <h2 className='relative flex flex-col justify-center items-center uppercase font-[900] text-[3rem] lg:text-[7rem]'>
          Sobre mí
          <span className='font-[Blacksword] capitalize text-[#DBAB00] text-[2rem] lg:text-[4rem] absolute lg:top-[2.5rem]'>
            Sobre mí
          </span>
        </h2>
        <div className='w-full flex justify-center'>
          <p className='text-gray-400 max-w-[950px] mx-[2rem] text-[20px] font-normal'>
            Apasionado <b>programador Front-End</b> con experiencia en <b>crear interfaces atractivas y funcionales </b>
            usando <b>HTML</b>, <b>CSS</b> y <b>React.js</b>. También tengo conocimientos en <b>Back-End</b> con <b>Laravel</b> y <b>Genexus</b>, 
            lo que me permite abordar <b>proyectos web de manera integral</b>. Mi <b>atención a los detalles</b> y 
            <b> habilidad en caligrafía</b> se reflejan en mi <b>código limpio y legible</b>.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
