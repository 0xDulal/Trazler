import React from 'react'
import Rating from '../Rating'
const TestimonialCard = ({name, address, image, rating, review}) => {
  return (
    <section className='bg-white p-6 rounded-lg shadow-md max-w-md w-full'>
      <div className='flex items-center gap-4 justify-items-start'>
            <img src={image} alt="image" className='h-14 w-14 rounded-full' />
           <div>
            <span className='font-playfair text-2xl font-semibold'>{name}</span>
            <p className='text-gray-600'>{address}</p>
           </div>
      </div>
           <Rating value={rating} className='my-4' />
      <p className='text-gray-700 text-md'>
            <span className='text-2xl font-playfair'>❝</span>
            {review}
            <span className='text-2xl font-playfair'>❞</span>
            </p>
    </section>
  )
}

export default TestimonialCard
