import './Card1.css'
import React from 'react'
import icon1 from '../image/icon1.png'
 
 function Card1() {
   return (
     <div className='Card-main'>
        <div className='Card-body'>
            <div className='Card-p'>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='Card-group'>
                <div className='Card-icon'>
                    <img className='icon1' src={icon1}/>
                </div>
                <div className='Card-group-p'>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Sed non dui sodales, faucibus libero ut, 
                posuere felis. Donec imperdiet suscipit accumsan. 
                Aenean consequat condimentum velit ut tempor. 
                Nam porta massa in metus bibendum congue. 
                Pellentesque ultrices liquam egestas nunc at
                </div>
            </div>
            <div className='Card-p2'>
                <p>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut.</p>
            </div>
        </div>
     </div>
   )
 }
 
 export default Card1
 