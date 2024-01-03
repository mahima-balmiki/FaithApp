import React from 'react'
import data from '../data.json'
import './styles/Header.css'

const Header = () => {

  return (
    <>
    <div className='header'>
    </div>
     <div className="text">
     <div className="name">
         {data.instructor.name}
     </div>
     <span className='title'>
         {data.course.title}
     </span>
     </div>
     </>
  )
}

export default Header