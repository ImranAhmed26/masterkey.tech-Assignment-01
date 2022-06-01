import React from 'react'

export const Banner2 = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex justify-between'>
        <div className='flex pt-8 pl-20 text-sm font-medium'>
          <h1 className='text-gray-800  '>
            ..............................................................................................
          </h1>
        </div>
        <div className='text-3xl text-[#644f9c] font-medium pt-6 px-2 uppercase'>
          Available for Everyone
        </div>
        <div className='flex pt-8 pr-20 text-sm font-medium'>
          <h1 className='text-gray-800  '>
            ..............................................................................................
          </h1>
        </div>
      </div>
      <div className='text-center text-xl pt-4'>Here will be your text</div>

      <div className='w-full flex justify-between px-36 py-10'>
        <div>
          <div className='bg-white text-blue-800 w-32 h-32 text-center text-3xl pt-10 font-bold rounded-full'>
            Icon 1
          </div>
          <div className='text-center pt-4 text-lg font-semibold'>Text 1</div>
          <button className='text-center pt-0 text-lg font-semibold text-white w-40 bg-[#644f9c] rounded-3xl py-0.5 mt-1 shadow-md'>
            Hello 1
          </button>
        </div>
        <div>
          <div className='bg-white text-blue-800 w-32 h-32 text-center text-3xl pt-10 font-bold rounded-full'>
            Icon 2
          </div>
          <div className='text-center pt-4 text-lg font-semibold'>Text 2</div>
          <button className='text-center pt-0 text-lg font-semibold text-white w-40 bg-[#644f9c] rounded-3xl py-0.5 mt-1 shadow-md'>
            Hello 2
          </button>
        </div>
        <div>
          <div className='bg-white text-blue-800 w-32 h-32 text-center text-3xl pt-10 font-bold rounded-full'>
            Icon 3
          </div>
          <div className='text-center pt-4 text-lg font-semibold'>Text 1</div>
          <button className='text-center pt-0 text-lg font-semibold text-white w-40 bg-[#644f9c] rounded-3xl py-0.5 mt-1 shadow-md'>
            Hello 3
          </button>
        </div>
      </div>
    </div>
  )
}
