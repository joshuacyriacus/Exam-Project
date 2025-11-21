import React, { useState } from 'react'
import { Home, User, Settings, Menu } from "lucide-react"

const LandingPage = () => {

   const [showMenu, setShowMenu] = useState()

   const details = ["Home", "About us", "Contact", "Terms & Condition"]
   const whatWeOffer = [
    "⏳ Exam Timer & Auto Submission",
    "📌 Multiple Choice & Code-Based Questions",
    "📄 Past Questions & Likely Repeats",
    "📈 Instant Result & Detailed Analysis",
    "🧪 Exam-like Interface (CBT style)",
    "🎧 Audio & Calculator Support (If required)"
   ]

  return (
    <div className='min-h-screen w-full p-5 '>

       <header className='flex flex-row justify-center 
        items-center mt-3 px-4 py-6 max-sm:py-4 gap-17 shadow-lg rounded-4xl
         shadow-black max-w-5xl mx-auto max-sm:justify-between '>
         <h1 className='text-green-600 font-bold sm:text-3xl text-2xl'>
           Exam-App
         </h1>

         <ul className='flex gap-5 text-md font-medium max-sm:hidden'>
            {details.map((det, index) => (
              <li key={index}>{det}</li>
            ))}
         </ul>

         <div className='flex flex-row md:gap-5 max-sm:gap-2 max-sm:hidden' >
           <button className='px-3 py-2 ring-2 ring-black rounded-xl font-semibold text-black'> Login</button>
           <button className='px-4 py-2 border-0 bg-green-600 text-white font-semibold rounded-2xl'>Signup</button>
         </div>
         <Menu className='sm:hidden' size={29} onClick={() => setShowMenu(true)}/>
       </header>

       {/*Dropdown Menu */}
       { showMenu ? (
        <div  className='md:hidden flex flex-col shadow-2xl px-3 '>
          <ul className='mt-5'>
            <li className='p-3'>Home</li>
            <hr />
            <li className='p-3'>About Us</li>
            <hr />
            <li className='p-3'>Contact</li>
            <hr />
            <li className='p-3'>Terms & Condition </li>
            <hr />
          </ul>
          <button className='text-center 
          bg-green-600 font-semibold 
          text-white py-2 rounded-xl
           mt-3' onClick={() => setShowMenu(false)}>cancel</button>
       </div>
       ) : "" }

       

       <section className='flex sm:flex-row flex-col sm:mt-25 sm:p-3 mt-12 mx-auto items-start justify-around '> 
         <div className='left sm:mt-10'>
            <h1 className='sm:text-5xl font-bold text-green-600 text-3xl'>Prepare Like It’s the Real CBT Exam</h1>
            <p className="font-light sm:text-4xl mt-4 leading-relaxed text-2xl 
               max-sm:leading-7">
              Experience full computer-based exams <br />
              with real-time scoring, timer, and full exam <br/>
              simulation — just like in the hall.
            </p>

            <div className='flex flex-row gap-3 mt-5'>
              <button className='px-5 py-3 text-white font-semibold bg-green-600 rounded-xl'>Download</button>
              <button className='px-5 py-3 text-black font-semibold ring-1 ring-black rounded-xl'>Register</button>
            </div>
         </div>

         <div className='max-sm:mt-4'>
           <img 
           src="/—Pngtree—a 3d illustration of young_23218458.png" 
           alt="Student" 
           className='object-contain sm:w-xl h-lg '
           />
         </div>
       </section>


      <section className='flex flex-col mt-12 mb-7'>
        <div className='text-center pb-3 mt-3'>
         <h2 className='font-semibold text-2xl sm:text-3xl text-green-600'> What This App Offers</h2>
         <p className='text-xl'>Focused on realistic exam preparation</p>
        </div>
        <div className=' flex flex-col sm:flex-row justify-center mt-10 sm:gap-30 gap-5'>
          <img
             src="/pexels-max-fischer-5212695.jpg"
            alt=" Students- studying" 
            className='object-cover w-xl rounded-2xl  '
            />

            <div className='font-normal sm:text-2xl text-md'>
              <ul className='sm:space-y-4'>
                {whatWeOffer.map((what, index) => (
                  <li key={index}>{what}</li>
                ))}
              </ul>
              <button className='px-5 py-3 text-center bg-green-600 text-white rounded-xl mt-7 ml-1 '>
                Try Demo Test
              </button>
            </div>
        </div>

      
      </section>
    </div>
  )
}

export default LandingPage
