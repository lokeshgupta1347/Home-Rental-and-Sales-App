import React from 'react'
import Title from './Title'
import { assets } from '../assets/data'

const About = () => {
  return (
    <section>
        {/* conainer  */}
        <div>
            {/* info left side */}
        <div>
                <Title
            title1={"Your Trusted Real Estate Partner"}
            title2={"Helping You Every Step of the Way"}
            para={"Trust , clarity, and simplicity are at the core of everything we do to make your property journey easy."}
            titleStyles={'mb-10'}
            />
            <div className='flex flex-col gap-6 mt-5'>
                <div className='flex gap-3'>
                 <img src={assets.calendarSecondary} alt="" />
                 <p>In-app scheduling for property viewings</p>


                </div>
                
                <div className='flex gap-3'>
                 <img src={assets.graph} alt="" />
                 <p>Real-time market price update</p>


                </div>
                <div className='flex gap-3'>
                 <img src={assets.map} alt="" />
                 <p>User-friendly interface for smooth navigation</p>


                </div>

                <div className='flex gap-3'>
                 <img src={assets.pound} alt="" />
                 <p>Access to off-market properties</p>


                </div>
            </div>
            {/* Rating  */}
            
        </div>
            
        </div>
    </section>
  )
}

export default About