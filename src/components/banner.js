import React from 'react'

export const Banner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex justify-between'>
        <div className='text-3xl font-extrabold py-6 px-20'>LOGO</div>
        <div className='flex py-8 px-20 text-sm font-medium'>
          <h1 className='text-green-700 cursor-pointer '>{`BN  `}</h1>
          <h1> {` /`}</h1>
          <h1 className='cursor-pointer '>EN</h1>
        </div>
      </div>
      <div className='flex  pl-20 uppercase text-[#644f9c] font-medium'>
        <div className='flex gap-7'>
          <div className='text-[#FF6F00] cursor-pointer'>Home</div>
          <div className='cursor-pointer'>Advertisers</div>
          <div className='cursor-pointer'>Publishers</div>
          <div className='cursor-pointer'>Influencers</div>
          <div className='cursor-pointer'>AD formats</div>
          <div className='cursor-pointer'>Blog</div>
          <div className='cursor-pointer'>Contact Us</div>
        </div>
        <div className='bg-white w-48 h-10 text-left ml-32 pt-1.5 pl-4 pr-2 flex rounded-3xl text-black shadow-md '>
          <span className='cursor-pointer'>LOGIN </span>
          <button className='bg-[#FF6F00] h-7 ml-4 px-5 rounded-3xl text-white shadow-md'>
            SIGN UP
          </button>
        </div>
      </div>
      <div className='w-full flex justify-between px-36 py-10'>
        <div className='w-96 h-96 '>
          <h1 className='text-4xl text-[#644f9c]'>Here will be a Title</h1>
          <h1 className='text-2xl text-black pt-20'>Here will be a Title</h1>
        </div>
        <div className='bg-white w-96 h-80 text-center pt-36 text-2xl font-bold'>
          Artwork for Title 1
        </div>
      </div>
    </div>
  )
}
