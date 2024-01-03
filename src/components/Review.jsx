import React from 'react'
import data from '../data.json'
import './styles/Review.css'
const Review = () => 
{
  return (
    <div className='review'>
        <h2>"{data.testimonial.text}"</h2>
        <div className="reviewer_info">
            <div className="reviewer_img">

            </div>
        <div className='reviewer'>
        <span>{data.testimonial.reviewer_name}</span><br />
        <span>{data.testimonial.reviewer_designation}</span>
        </div>
        </div>
    </div>
  )
}

export default Review