import React from 'react'
import data from '../data.json'
import fb from './styles/fb.svg'
import ig from './styles/ig.svg'
import x from './styles/x.svg'
import yt from './styles/yt.svg'
import './styles/Instructor.css'
const Instructor = () => {
  return (
    <div className='instructor'>
        <h2>About the Instructor</h2>
        <div className='content'>
            <div className="profile_photo">

            </div>
            <div>
            <div dangerouslySetInnerHTML={{ __html: data.course.about.html_content }} /> 
            <div className='social_media'>
            {data.instructor.social_media.facebook && <a href="#"><img src={fb}/>Facebook</a>}
            {data.instructor.social_media.twitter && <a href="#"><img src={x}/>Twitter</a>}
            {data.instructor.social_media.youtube && <a href="#"><img src={yt}/>Youtube</a>}
            {data.instructor.social_media.instagram && <a href="#"><img src={ig}/>Instagram</a>}
        </div>
        </div>
    </div>
       
    </div>
  )
}

export default Instructor