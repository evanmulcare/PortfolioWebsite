import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Screenlogs from '../assets/Screenlogs.png'
import cover from '../assets/cover.png'

const Projects = () => {
    const slides = [
        {
          url: Screenlogs,
        },
        {
          url: cover,
        }
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
       

  return (

    <div className='flex items-center justify-center w-full text-dark bg-white'>
        <div className='max-w-[1240px] px-4 py-10'>
            <div className='text-center'>
                <h1 className='text-3xl py-2'>Portfolio</h1>
                <hr class="my-4 mx-auto w-48 h-0.5 bg-gray-400 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
            </div>

            {/*Slider*/}
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                 <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
    

                <div className='hidden group-hover:block translate-y-[700%] items-center justify-center w-full py-4'> 
                    <div className='inline-flex space-x-3'>
                       <Link to='/portfolio'> <button className='bg-cyan-600 text-white py-3 px-5 rounded-3xl md:ml-8 hover:bg-cyan-400 duration-500'>View</button> </Link>
                       <a href='https://github.com/evanmulcare'> <button  className='bg-cyan-600 text-white py-3 px-5 rounded-3xl md:ml-8 hover:bg-cyan-400 duration-500'>github</button> </a>
                    </div>
                </div>
             </div>

                 {/* left Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%]  translate-y-[-50%] text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-back-circle" onClick={prevSlide}></ion-icon>
                    </div>
                {/* Right Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-forward-circle" onClick={nextSlide}></ion-icon> 
                 </div>
                 <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}className='text-xs cursor-pointer p-2 text-gray-600'>
                            <ion-icon name="ellipse" ></ion-icon>
                        </div>
                    ))}
                 </div>
            </div>


            <div className='text-center'>
                <p>Here are a few of my projects. check them out on their pages if you wish. You can view more of my work on GitHub!</p>
            </div> 
        </div>
    </div>
  )
}

export default Projects