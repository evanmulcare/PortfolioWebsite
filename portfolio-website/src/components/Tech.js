import React from 'react'
import { SiJavascript, SiJava, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs,  SiExpress, SiTailwindcss, SiBootstrap, SiMongodb, SiBlender, SiAdobephotoshop, SiGithub, SiVisualstudio, SiMysql} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Tech = () => {
  return (
    <div className='w-full bg-white text-dark text-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <div>
                <h1 className='text-4xl py-2'>About</h1>
                <hr class="my-4 mx-auto w-48 h-0.5 bg-gray-400 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
                <p className='py-10 text-xl'>
                   <span className='font-semibold'>Hey, im Evan. </span> Im a software development student currently enrolled at <span className='text-cyan-700'> Munster Technology University. </span>
                    I enjoy all aspects of programming with a particular interest in web development.I look forward to gaining new experience.
                   if you have any any enquires please <Link to='/contact' className='font-semibold hover:underline'>contact me!</Link>
                </p>

            </div>
            {/* Card Container*/}
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='flex flex-col border text-center rounded-2xl py-12 px-8'>
                    <div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiJavascript />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiJava />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>       
                            <SiPython />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>       
                            <SiMysql />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiHtml5 />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiCss3 />
                            </div>
                        <h3 className='text-xl font-bold py-4'>Languages</h3>
                        <p>
                            list of current Tools.
                            <ul className='py-2 font-semibold'>
                                <li>Javascript</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>MySQL</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </p>
                    </div>
                </div>

            <div className='flex flex-col border text-center rounded-2xl py-12 px-8'>
                    <div className='space-x-1'>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiReact />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiNodedotjs />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>       
                            <SiExpress />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiTailwindcss />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiBootstrap />
                            </div>
                        <h3 className='text-xl font-bold py-4'>Frameworks</h3>
                        <p>
                            list of current Tools.
                            <ul className='py-2 font-semibold'>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                            </ul>
                        </p>
                    </div>
                </div>

            <div className='flex flex-col border text-center rounded-2xl py-12 px-8'>
                    <div className='space-x-1'>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiMongodb />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiBlender />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>       
                            <SiAdobephotoshop />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiGithub />
                            </div>
                        <div className='bg-cyan-600 inline-flex text-4xl p-2 rounded-full text-white'>
                            <SiVisualstudio />
                            </div>
                        <h3 className='text-xl font-bold py-4'>Tools</h3>
                        <p>
                            list of current Tools.
                            <ul className='py-2 font-semibold'>
                                <li>MongoDB</li>
                                <li>Blender</li>
                                <li>Adobe Photoshop</li>
                                <li>Github</li>
                                <li>VSCode</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Tech