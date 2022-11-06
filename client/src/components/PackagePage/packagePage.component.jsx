import React from 'react';

import TravelOptions from './travelOptions.component';
import StayOptions from './stayOptions.component';
import ActivitiesOptions from './activitiesOption.component';

import package__hero__img from "../../assets/mumbai-img.png";

function PackagePageComponent() {
  return (
    <>
        <div className='w-full h-screen overflow-hidden relative'>
            <img src={package__hero__img} alt="package-hero-image" className='w-full'/>
            <div className='absolute top-64 left-24 w-1/4'>
                <div className='font-bold text-4xl'>MUMBAI</div>
                <div className='mt-2 text-lg'>
                    Speckled with Victorian buildings, lofty skyscrapers, the glamour of Bollywood, pulsating nightlife and romantic beaches, the mega-city of Mumbai is a mecca for dreamers looking to make it big.
                </div>
            </div>
        </div>

        <div className='w-2/3 mx-auto mb-20'>

            <div className='my-12 bg-gray-100 flex font-semibold text-lg items-center justify-between px-8 py-3 rounded-lg'>
                <div>
                    Book Your Trip
                </div>
                <div className=' w-1/2 flex items-center justify-between'>
                    <div className='hover:text-vto-400'>
                        Hotels
                    </div>
                    <div className='hover:text-vto-400'>
                        Cars
                    </div>
                    <div className='hover:text-vto-400'>
                        Flights
                    </div>
                    <div className='hover:text-vto-400'>
                        Activities
                    </div>
                </div>
            </div> 

            <TravelOptions />
            <hr className='my-16'/>
            <StayOptions />
            <hr className='my-16'/>
            <ActivitiesOptions />

        </div>

        
    </>
  )
}

export default PackagePageComponent