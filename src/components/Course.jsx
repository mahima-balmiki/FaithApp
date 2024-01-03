import React from 'react'
import data from '../data.json'
import './styles/Course.css'
import msg from './styles/msg.svg'
import video from './styles/video.svg'
const Course = () => 
{
    const included = data.course.inclusions ;
  return (
    <div className='course'>
        <span className='fees-heading'>Course fees</span><br></br>
        <span className='currency'>{data.course.fee.currency}  </span>
        <span className='amount'>{data.course.fee.amount}</span>
        <h3>What's included:</h3>
        <p><img src={video}>
        </img>{data.course.inclusions.on_demand_videos}  on-demand videos</p>
        {data.course.inclusions.live_qa_sessions  && <p> <img src={video}/>livestream sessions</p>}
        {data.course.inclusions.whatsapp_community  && <p><img src={msg}/> An active Whatsapp community</p>}
        <button>Register today</button>
    </div>
  )
}

export default Course