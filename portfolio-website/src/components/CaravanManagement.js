import React from 'react'
import Header from './Header'
import CaravanRecording from '../assets/CaravanRecording.mp4'
import Screenlog from '../assets/Screenlogs.png'
import pic1 from '../assets/pic1.png'
import pic7 from '../assets/pic7.png'
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
                <div className='bg-lime-600  border border-black inline-flex text-4xl rounded-full text-white p-5'></div>
                <div className='bg-cyan-600  border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-yellow-200  border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-gray-500  border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-black inline-flex text-4xl p-5 rounded-full text-white'></div>
                <div className='bg-white border border-black inline-flex text-4xl p-5 rounded-full text-white'></div>
            </div>
        </div>
        <section >
        <div>
        <video controls autoplay>
            <source src={CaravanRecording} type="video/mp4" />
        </video>
        </div>
        <div className='pt-16 pb-16'>
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Project Goals</h2>
                <p>
                    In this project I designed and developed an interactive and responsive website to 
                    Provide information about Doon Bay Caravan park on a public facing website. I then implemented am administration section with authentication achieved through Auth0. In the Admin section there are many functions to avail of.</p>
                <p>
                An Administrator of the system is able to create/review/update and delete tenant and staff
                information. The Administrator can also view all payments in and out of the business and again preform CRUD operations.
                The admin can assign tasks to staff members and create blog posts.
                </p>
            </div>
       

                <div className='text-center text-lg p-4'>
                    <h2 className='font-semibold'>learnings</h2>
                    <ul>
                        <li>How to work with ReactJS.(Hooks, Routing, etc..))</li>
                        <li>Steps in how to Connect a backend to a frontend.(CORS, REST API)</li>
                        <li>information on Cookies, Sessions and the differences between authentication and authorization</li>
                        <li>deepened knowledge of css and the tailwind framework.</li>
                    </ul>
                </div>
      
    
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Overview</h2>
                <p>
                    The initial page displays on all accesses to the Web Site,It does not require a login and displays general information about Doon Bay caravan park in the form of
                </p>    
                <ul className='p-3'>
                        <li>• Home Page</li>
                        <li>• Photos</li>
                        <li>• About Page</li>
                        <li>• Admin Login </li>
                    </ul>
                <p>
                   In the admin section, a user can preform a wide variety of actions relating to the management of the caravan park, these include:
                   <ul className='p-3'>
                        <li>• dashboard Overview Section</li>
                        <li>• Tenants/Staff CRUD Operations</li>
                        <li>• Money Management</li>
                        <li>• Task Assignment</li>
                        <li>• Event organization </li>
                    </ul>
                </p>

                   <p>The backend of the system functions using Express, Node and MongoDB</p>
            </div>
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Project Reflection</h2>
                <p className='py-5'>
                    I decided to develop this project over the December break as I wanted to further understand the React framework and how to develop a full stack web application.I picked Doon Bay caravan park as i had previously worked here and had an understanding of the ownerships needs in a potential system.
                </p>
                <p>
                    The most difficult part of the project was implementing Authentication in the system.The highlight of the project for me was the frontend design and working with tailwind. While i enjoyed all aspects of the process, this project has though me that i would like to focus more on frontend projects in the future.
                </p>
            </div>
        </div>
            <div className='grid sm:grid-cols-2 py-16'>
                <img src={pic1}  />
                <img src={pic7}  />
            </div>
            
        </section>
        </div>
        </div>
      )
}

export default CaravanManagement