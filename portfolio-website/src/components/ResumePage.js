import React from 'react'

const ResumePage = () => {
  return (
    <div>
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl h-full break-words'>
          <div>
            <h1 className='text-cyan-700 text-2xl underline'>Evan Mulcare</h1>
            <div className='inline-flex'>
            <h3><span><a href='mailto: evanmulcare@gmail.com' className='text-blue-500 underline'> evanmulcare@gmail.com </a></span></h3>
            <h3> | <span><a href='tel:087-453-8423' className='text-blue-500 underline'>0874538423</a></span> | </h3>
            <h3><span><a href='https://github.com/evanmulcare' className='text-blue-500 underline'> GitHub </a></span></h3>
            </div>
            <h3  className='italic'>Model Farm Rd, Cork</h3>
            <br />
            <hr />
            <br />
            <div className='education'>
            <h1 className='text-cyan-700 text-2xl underline'>Education</h1>
              <div className='grid grid-cols-2'>
                <h3 className='font-semibold'>Software Development | Munster Technological University</h3>
                <h3 className='font-semibold'>2021-2024</h3>
                </div>
                <h4 className='italic'>Cork, Ireland</h4>
                <h4>Key Modules: Server Side Web Development, Linear Data Structures and algorithms,</h4>
                <h4> Database Design, Operating Systems</h4>
            </div>
            <br />
            <div className='skills '>
            <h1 className='text-cyan-700 text-2xl underline'>Skills</h1>
                <h4 className='italic'>Javascript|Java|Python|HTML|CSS|SQL|ReactJS|ExpressJS|NodeJS|MongoDB|Tailwind|</h4>
                <h4 className='italic'>Bootstrap|Auth0|Git|Unity|Adobe Photoshop|Blender|OOP|Data Structures and Algorithms.</h4>
               
            </div>
            <br />
            <div className='experience'>
              <h1 className='text-cyan-700 text-2xl underline'>Experience</h1>
                <div className='grid grid-cols-2'>
                  <h3 className='font-semibold'>Technical Support Advisor | Apple </h3>
                  <h3 className='font-semibold'>Summer 2022</h3>
                  </div>
                  <h4 className='italic'>Remote, Ireland</h4>
                  <ul>
                    <li>·       Responsible for troubleshooting end user problems on apple devices and IOS platforms</li>
                    <li>·       Resolved software and hardware issues in a face-paced work environment</li>
                    <li>·       Underwent extensive training on problem-solving and communication skills</li>
                  </ul>
                </div>
            </div>
            <br />
            <div className='projects'>
              <h1 className='text-cyan-700 text-2xl underline'>Projects</h1>

                  <div className='grid grid-cols-2'>
                    <h3 className='font-semibold'>Caravan park management systemCaravan park management system </h3>
                    <h3 className='font-semibold'>Dec. 2022</h3>
                  </div>
                    <br />
                    <ul>
                      <li>·       Web application for the management of  staff and tenants of a caravan park.</li>
                      <li>·       Tracks staff information, tenant information, Payments in and out, and task assignment</li>
                      <li>·       Public-facing site and members portal, front-end developed using React and tailwind CSS</li>
                      <li>·       Backend developed using NodeJS, Express and MongoDB.</li>
                      <li>·       authentication implemented with Auth0</li>
                    </ul>
                    <br />

                  <div className='grid grid-cols-2'>
                    <h3 className='font-semibold'>Screen time logging website</h3>
                    <h3 className='font-semibold'>Oct. 2022</h3>
                  </div>
                    <br />
                    <ul>
                      <li>·       Screen logging web application with data visualisation</li>
                      <li>·       Users can create, update, delete and read data relating to a log instance</li>
                      <li>·       All data is visualized through various charts, implemented through Google Chart and ChartJS APIs.</li>
                      <li>·       Technologies used: Javascript,NodeJS,ExpressJs,MongoDB,GoogleCharts,ChartJS,Bootstrap CSS</li>
                    </ul>
                    <br />
                    
                  <div className='grid grid-cols-2'>
                    <h3 className='font-semibold'>Data Structure and algorithm implementations</h3>
                    <h3 className='font-semibold'>Sept.2022</h3>
                  </div>
                    <br />
                    <ul>
                      <li>·       Given base classes implemented many data structures and algorithm in Java</li>
                    </ul>
                    <br />
                  <div className='grid grid-cols-2'>
                    <h3 className='font-semibold'>Personal portfolio website </h3>
                    <h3 className='font-semibold'>June.2022</h3>
                  </div>
                    <br />
                    <ul>
                      <li>·       Personal website developed to showcase skills and past Projects</li>
                      <li>·       Technologies used: JavaScript, React, Tailwind CSS</li>
                    </ul>
                    <br />

              </div>
              <div className='hobbies'>
                <h1 className='text-cyan-700 text-2xl underline'>Hobbies</h1>
                <br />
                <h4 className='italic'> I enjoy participating in University events and I am a member of the Cyber Security and Programming Societies.</h4>
                <br />
              </div>
          </div>
        </div>
  )
}

export default ResumePage