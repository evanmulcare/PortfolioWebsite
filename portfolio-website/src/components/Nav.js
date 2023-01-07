import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-cyan-700 text-white'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <Link to="/"><div className='text-cyan-500 text-5xl font-bold'>EM</div></Link>
            <div className='hidden md:flex'>
                <ul className='flex items-center space-x-4 text-lg'>
                
                    <Link to="/portfolio"><li className='hover:text-cyan-400 duration-500'> Portfolio</li></Link>
                    <Link to="/about"><li className='hover:text-cyan-400 duration-500'>About</li></Link>
                    <Link to="/contact"><li className='hover:text-cyan-400 duration-500'>Contact</li></Link>
                    <Link to="/resume"><li className='bg-cyan-600 text-white py-3 px-5 rounded-3xl md:ml-8 hover:bg-cyan-400 duration-500'>Resume</li></Link>
                 
                </ul>
            </div>

            {/*Hamburger*/}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/> }
            </div>

            {/*Mobile Menu */}
            <div className={nav ? 'w-full bg-cyan-700 text-white absolute top-[90px] left-0 flex justify-center text-center z-30 md:hidden' : 'absolute left-[-100%] z-30'}>
                <ul>
                   
                <Link to='/portfolio'><li className='hover:text-cyan-400 duration-500 text-2xl p-2'>Portfolio</li></Link>
                <Link to='/about'><li className='hover:text-cyan-400 duration-500 text-2xl p-2'>About</li></Link>
                <Link to='/contact'><li className='hover:text-cyan-400 duration-500 text-2xl p-2'>Contact</li></Link>
                <Link to='/resume'><li className='bg-cyan-600 text-white py-3 px-5 rounded-3xl md:ml-8 hover:bg-cyan-400 duration-500 text-2xl p-2'>Resume</li></Link>
                 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav