import React from 'react'
import './Body.css'
import logoNCC1 from '../image/logoNCC1.png'
import icon1 from '../image/icon1.png'

function Body() {
  return (
    <div className='Body'>
      <div className='Body-background'>
        <img className='Logo' src={logoNCC1} alt='logo'/>
        <div className='Body-group1'>
            <div className='Group1-p1'>
            Lorem ipsum dolor sit asmet?
            </div>
            <div className='Group1-p2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Body
