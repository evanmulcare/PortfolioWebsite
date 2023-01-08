import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qqnirgm', 'template_f8fbaz4', form.current, 'tPepm3RSIO6xKdtEv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (

    <div className='flex items-center justify-center w-full text-black bg-cyan-700' id='contact'>
        <div className='max-w-[1240px] px-20 py-16'>
            
            <div className='bg-white flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg'>
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                    <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
                    <p className='pt-2 text-black text-sm'>Want to get in touch? you can contact me through the linked form here or by email. I look forward to speaking with you soon :) </p>
                </div>
                <div className='flex flex-col space-y-6'>
           
                    <div className='inline-flex space-x-2 items-center'>
                        <ion-icon name="mail" className="text-teal-500 text-xl"></ion-icon>
                        <span className='font-semibold hover:underline'>evanmulcare@gmail.com</span>
                    </div>
                </div>
            </div>
            <div>
                    <div className='bg-cyan-600 rounded-xl shadow-lg p-8 text-white md:w-80'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                            <div>
                                <label className='text-sm form-label' htmlFor="name">Name</label>
                
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 text-black' required/>

                            </div>
                            <div>
                                <label className='text-sm form-label'>Email Address</label>
                
                                <input type="text" name="user_email" placeholder='Email Address' className='form-control ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 text-black' required/>

                            </div>
                            <div>
                                <label className='text-sm form-label' htmlFor="message">Message</label>
                
                                <textarea type="submit" name="message" placeholder='Message' rows="4" className='form-control ring-1 bg-white ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 text-black' required/>
                                
                            </div>
                            <input type="submit" value="Send" className='text-xl font-bold cursor-pointer' />
                            </form>
                        {/*        <button className='inline-block self-end text-xl font-bold' type="submit">{formStatus}</button>
                        </form> */}
                    </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contact