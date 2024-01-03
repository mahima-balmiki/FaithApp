import React from 'react'
import data from '../data.json'
import './styles/AboutCourse.css'

const AboutCourse = () => {

  return (
    <div className='about_course' id='about_course'>
        <h2>About The Course</h2>
        <div dangerouslySetInnerHTML={{ __html: data.course.about.html_content }} />
        <h3>What to expect from the course</h3>
        <div dangerouslySetInnerHTML={{ __html: data.course.what_to_expect.html_content }} />
        <h3>Key topics covered</h3>
        <div dangerouslySetInnerHTML={{ __html: data.course.key_topics.html_content }} />
    </div>
  )
}

export default AboutCourse