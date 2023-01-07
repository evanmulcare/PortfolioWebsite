import React from 'react'
import Nav from "./Nav";
import { Link } from 'react-router-dom'

const PortfolioPage = () => {
  return (
    <div>
      <div className='grid sm:grid-rows-3 lg:grid-rows-3 gap-4'>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>
                    <div className='grid grid-cols-2 gap-4'>
                       <Link to='screen-logs'>
                          <div className='bg-cyan-600 text-4xl p-2 rounded-full text-white'>
                              Screenlogs
                          </div>
                        </Link>
                        <div>
                          <h3 className='text-xl font-bold py-4'>Screenlogs</h3>
                          <p>
                              list of current Tools.
                          </p>
                        </div>
                    </div>
              </div>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Link to='caravan-management'>
                            <div className='bg-cyan-600 text-4xl p-2 rounded-full text-white'>
                          CaravanManagement
                          </div>
                        </Link>
                        <div>
                          <h3 className='text-xl font-bold py-4'>CaravanManagement</h3>
                          <p>
                              list of current Tools.
                          </p>
                        </div>
                    </div>
              </div>
            <div className='flex flex-col border text-center rounded-xl py-12 px-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Link to='noir-adventure'>
                          <div className='bg-cyan-600 text-4xl p-2 rounded-full text-white'>
                          NoirAdventure
                          </div>
                        </Link>
                        <div>
                          <h3 className='text-xl font-bold py-4'>NoirAdventure</h3>
                          <p>
                              list of current Tools.
                          </p>
                        </div>
                    </div>
              </div>
      </div>
    </div>
  )
}

export default PortfolioPage