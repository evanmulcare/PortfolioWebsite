import React from 'react'
import Header from './Header'
import Screenlog from '../assets/Screenlogs.png'
import Create from '../assets/Create.png'
import Homepg from '../assets/Homepg.png'
import ScreenLogsrecord from '../assets/ScreenLogsrecord.mov'
import { Link } from 'react-router-dom'

const Screenlogs = () => {
  return (
    <div className='bg-white'>
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl h-full'>
    <div className='flex justify-between'>
        <Header category="Portfolio" title="ScreenLogs"/>
        <a href='https://github.com/evanmulcare'className='cursor-pointer'>
            <div>
                <button className='border p-2 rounded-2xl bg-cyan-700 text-white text-2xl'>
                    Github
                </button>
                </div>
        </a>
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
        <div><video src={ScreenLogsrecord}></video></div>
        <div className='pt-16 pb-16'>
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Project Goals</h2>
                <p>
            In this project I designed and developed an interactive and responsive website to 
            store details of your mobile phone usage. </p>
                <p>
                A user of the application is  able to create/review/update and delete daily usage 
                information. The user of the website is be able to add details on daily usage, the details 
                 include the name of the user, the duration on education usage, the duration 
                shopping, the duration searching or browsing and the duration on social media. Each entry 
                has the date that it was created and defaults to today’s date. The name of the 
                person is also displayed.  
                </p>
            </div>
       

                <div className='text-center text-lg p-4'>
                    <h2 className='font-semibold'>learnings</h2>
                    <ul>
                        <li>How to implement CRUD operations on a backend server connected to a database.</li>
                        <li>Modelling Mongo documents.</li>
                        <li>How to use Bootstrap to achieve responsive design on different viewports.</li>
                        <li>How to work with Express and Node frameworks.</li>
                    </ul>
                </div>
      
    
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Overview</h2>
                <p>
                    The initial page displays on all accesses to the Web Site,This is a landing page with a stylized, moveable CSS Div modelled after a phone.This Div offers navigation functionality in links to 
                </p>    
                <ul className='p-3'>
                        <li>• Home Page</li>
                        <li>• Create a new daily usage entry</li>
                        <li>• About Page</li>
                        <li>• Help page </li>
                    </ul>
                <p>
                    The Home page has an overview of the site and the core functionality displayed in table, the table displays all user logs and provides functionality to, Search on daily usage by name, Modify a daily usage entry and Delete a daily usage entry log instances.
                </p>

                   <p>A mongo database on the server maintains all the details of each log </p>
            </div>
            <div className='text-center text-lg p-4'>
                <h2 className='font-semibold'>Project Reflection</h2>
                <p className='py-5'>I first started by developing a webserver running on the local machine connected to a 
                    database which allows a user to create a daily usage entry and list daily usage entries on a 
                    browser.
                </p>
                <p>I then moved on to allow a user to modify a daily usage entry by selecting from a list of entries for a user and also delete an entry. I also create a summary report on daily usage for each user which could be displayed on screen and had visual elements such as bar and pie charts. I then went back and also implemented these charts in both the create and home pages with dynamic input response.Finally i connected the about and contact pages and designed a landing page specific to the theme of the website with a movable div modelled after a phone. inside the div there is a styled navigation menu.</p>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 py-16'>
            <img src={Create}  />
            <img src={Homepg}  />
        </div>
        
    </section>
    </div>
    </div>
  )
}

export default Screenlogs