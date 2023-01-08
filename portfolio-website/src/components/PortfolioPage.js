import React from 'react'
import Nav from "./Nav";
import { Link } from 'react-router-dom'
import Screenlog from '../assets/Screenlogs.png'
import Caravan from '../assets/Caravan.png'

const PortfolioPage = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl h-full break-all'>
      <div className='grid grid-rows-3 gap-4'>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>

                    <Link to='screen-logs'>
                    <div className='grid grid-cols-2'>
                      
                              <img src={Screenlog} className='rounded-md'/>
                        
                        <div>
                          <h3 className='text-xl font-bold py-4'>Screen time logging</h3>
                          <ul>
                            <li>Javascript</li>
                            <li>NodeJS</li>
                            <li>ExpressJs</li>
                            <li>MongoDB</li>
                            <li>Bootstrap CSS</li>
                            <li>GoogleCharts</li>
                            <li>ChartJS</li>

                          </ul>
                        </div>
                    </div>
                    </Link>
              </div>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>
                    <Link to='caravan-management'>
                    <div className='grid grid-cols-2'>
                      
                              <img src={Caravan} className='rounded-md'/>
                        
                        <div>
                          <h3 className='text-xl font-bold py-4'>Caravan Park Management</h3>
                          <ul>
                         
                            <li>Javascript</li>
                            <li>ReactJs</li>
                            <li>NodeJS</li>
                            <li>ExpressJs</li>
                            <li>MongoDB</li>
                            <li>Tailwind CSS</li>
                            <li>Auth0</li>

                          </ul>
                        </div>
                    </div>
                    </Link>
              </div>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>
                    <Link to='caravan-management'>
                    <div className='grid grid-cols-2'>
                      
                              <img src={Screenlog} className='rounded-md'/>
                        
                        <div>
                          <h3 className='text-xl font-bold py-4'>Noir Adventure</h3>
                          <p>
                              list of current Tools.
                          </p>
                        </div>
                    </div>
                    </Link>
              </div>
      </div>
    </div>
  )
}

export default PortfolioPage