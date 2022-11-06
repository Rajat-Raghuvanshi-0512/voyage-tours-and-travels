import React, { useState } from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';


function ExplorePackage(props) {

  const [isActive, setIsActive] = useState(false);

  return (
      <>
        <div className=' my-6 bg-gray-100 py-2 px-3 rounded-xl flex justify-between'>
          <div className='flex items-center gap-3'>
              <img src={props.imgSrc} alt="logo" className='w-6 h-6'/>
              <div className='text-xl font-semibold'>
                  {props.explrTitle}
              </div>
          </div>

          <div className='flex gap-4 items-center'>
              <div>
                  {props.priceTitle}
                  <div className='text-right font-bold text-lg'>
                      ₹ {props.avgPrice}
                  </div>
              </div>
              <div 
              className='flex gap-1 items-center font-semibold text-vto-400 hover:text-vto-500 cursor-pointer'
              onClick={() => setIsActive(!isActive)}>
                  EXPLORE
                  <RiArrowDropDownLine className={`w-7 h-8 ${isActive ? "rotate-180" : ""}`}/>
              </div>
          </div>
        </div>

        {isActive && 
        <div className='my-4 flex text-align justify-center gap-6'>
          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6 flex flex-col justify-between'>
            <div className='text-xl font-bold'>
              {props.cardHeader1}
            </div>
            <div>
              {props.cardTitle1}
            </div>
            <div className='font-bold text-lg'>
              {props.cardFooter1}
            </div>
          </div>

          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6 flex flex-col justify-between'>
            <div className='text-xl font-bold'>
              {props.cardHeader2}
            </div>
            <div>
              {props.cardTitle2}
            </div>
            <div className='font-bold text-lg'>
              {props.cardFooter2}
            </div>
          </div>

          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6 flex flex-col justify-between'>
            <div className='text-xl font-bold'>
              {props.cardHeader3}
            </div>
            <div>
              {props.cardTitle3}
            </div>
            <div className='font-bold text-lg'>
              {props.cardFooter3}
            </div>
          </div>

          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6 flex flex-col justify-between'>
            <div className='text-xl font-bold'>
              {props.cardHeader4}
            </div>
            <div>
              {props.cardTitle4}
            </div>
            <div className='font-bold text-lg'>
              {props.cardFooter4}
            </div>
          </div>
        </div>
        }
        
      </>
  )
}

export default ExplorePackage;