import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (

      <div className='relative flex items-center justify-center h-screen mb-12 overflow-hidden bg-cyan-700'>
              <div className= 'w-full h-[90%] flex flex-col justify-center items-center p-5 text-2xl text-white text-center px-4'>
                <div>
                <h1 className='text-white text-4xl py-1 font-bold drop-shadow-xl'>Evan Mulcare</h1>
                <br />
                <div className='inline-flex space-x-2 text-4xl'>
                <a className='cursor-pointer'><p className='text-center text-white font-bold drop-shadow-xl'><ion-icon name="logo-github"></ion-icon></p></a>
                </div>
                  <br/>
                        <Link to='contact' className='text-xl font-bold cursor pointer drop-shadow-lg hover:underline'>CONTACT</Link>
                    <br />
                  <h1 className='text-white text-4xl py-2 font-bold drop-shadow-xl'>Student Developer</h1>        
              </div>
              </div> 
      </div>
  )
}

export default Hero