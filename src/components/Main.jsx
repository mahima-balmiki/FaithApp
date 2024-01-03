import React from 'react'
import AboutCourse from './AboutCourse'
import Instructor from './Instructor'
import Review from './Review'
import Course from './Course'
import './styles/Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='main-components'>
            <span>ABOUT</span>
            <span>INSTRUCTOR</span>
            <span>REVIEWS</span>
        </div>
        < Course />
        <AboutCourse />
        <Instructor />
        <Review />
    </div>
  )
}

export default Main