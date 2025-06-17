import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/harryPotterBg.jpg")] bg-cover bg-center h-[80vh]'>

      <img src={assets.harryPotter} alt="" />
      <h1 className='text-2xl font-bold leading-tight max-w-110'>Harry Potter and the Sorcerer&apos;s Stone</h1>
      <div className='flex items-center gap-4 text-gray-300'>
        <span>Fantasy | Adventure | Family</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'/> 2001
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
        </div>
      </div>
      <p className='max-w-md text-gray-300'> An orphaned boy discovers he's a wizard and enrolls at the magical Hogwarts School, where he learns the truth about his past and faces a dark force that threatens the wizarding world.</p>
      <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
         Explore Movies
         <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  )
}

export default HeroSection
