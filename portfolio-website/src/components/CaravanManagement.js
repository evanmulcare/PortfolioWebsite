import React from 'react'
import Header from './Header'
import Screenlog from '../assets/Screenlogs.png'
import { Link } from 'react-router-dom'

const CaravanManagement = () => {
  return (
   
        <div className='bg-white'>
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl h-full'>
        <div className='flex justify-between'>
            <Header category="Portfolio" title="CaravanManagement"/>
            <Link to="/">
                <div>
                    <button className='border p-2 rounded-2xl bg-cyan-700 text-white text-2xl'>
                        Github
                    </button>
                    </div>
            </Link>
        </div>
       
       
        <div className='flex flex-col text-center py-12 px-8'>
            <div className='space-x-2'>
                <div className='bg-green-600  border border-black inline-flex text-4xl rounded-full text-white p-5'></div>
                <div className='bg-red-600  border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-yellow-400 border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-blue-600 border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-orange-100 border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-white border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
            </div>
        </div>
        <section >
            <div><img src={Screenlog} /></div>
            <div className='pt-16 pb-16'>
                <div className='text-center text-lg p-4'>
                    <h2 className='font-semibold'>Project Goals</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea doloribus, vitae aliquid repudiandae aut numquam dicta eaque ad cupiditate tempora possimus laboriosam facere expedita repellendus asperiores molestiae quo quas.</p>
                </div>
                <div className='grid sm:grid-cols-2 py-16'>
                  
                    <div className='text-center text-lg p-4'>
                        <h2 className='font-semibold'>Difficulties</h2>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <div className='text-center text-lg p-4'>
                        <h2 className='font-semibold'>Achievements</h2>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
        
                <div className='text-center text-lg p-4'>
                    <h2 className='font-semibold'>Project Reflection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea doloribus, vitae aliquid repudiandae aut numquam dicta eaque ad cupiditate tempora possimus laboriosam facere expedita repellendus asperiores molestiae quo quas.</p>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 py-16'>
                <img src={Screenlog}  />
                <img src={Screenlog}  />
            </div>
            
        </section>
        </div>
        </div>
      )
}

export default CaravanManagement