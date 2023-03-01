import React from 'react'
import './Sidebar.css'
import mouse from '../image/mouse.svg'


function Sidebar() {
  return (
    <div className='SideBar'>
      <div className='Side-background'>
        <div className='Home-item'>
            <p className='Home-p'>Home</p>
        </div>
        <div className='Services-item'>
            <p className='Services-p'>Services</p>
        </div>
        <div className='News-item'>
            <p className='News-p'>News</p>
            <img className='Mouse' src={mouse} alt='mouse'/>
        </div>
        <div className='Blog-item'>
            <p className='Blog-p'>Blog</p>
        </div>
        <div className='Contact-item'>
            <p className='Contact-p'>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
