import React from 'react';

import ExplorePackage from './packageExplore.component';

import hotel__icon from "../../assets/HotelOptions.png";
import star__logo from "../../assets/Star.png";

function StayOptions() {
  return (
    <>
        <div className='mt-12 flex gap-4'>
            <div className='w-9'>
                <img src={hotel__icon} alt="package-hero-image" className=''/>
            </div>
            <div className='font-semibold'>
                <div className='text-3xl'>
                    Stay in Mumbai
                </div>
                <div className='text-lg'>
                    Recommended options
                </div>
            </div>
        </div>

        <ExplorePackage
        imgSrc={star__logo}
        explrTitle="3 Star Hotels"
        priceTitle="Average Price"
        avgPrice="5,257"
        cardHeader1="THE AVION HOTEL"
        cardTitle1="One way trip"
        cardFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardTitle2="One way trip"
        cardFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardTitle3="One way trip"
        cardFooter3="950 M from T1 Airport"
        cardHeader4="THE EMPRESSA HOTEL"
        cardTitle4="One way trip"
        cardFooter4="7.6 KM from Airport" 
        />
        <ExplorePackage
        imgSrc={star__logo}
        explrTitle="4 Star Hotels"
        priceTitle="Average Price"
        avgPrice="6,807"
        cardHeader1="THE AVION HOTEL"
        cardTitle1="One way trip"
        cardFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardTitle2="One way trip"
        cardFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardTitle3="One way trip"
        cardFooter3="950 M from T1 Airport"
        cardHeader4="THE EMPRESSA HOTEL"
        cardTitle4="One way trip"
        cardFooter4="7.6 KM from Airport" 
        />
        <ExplorePackage 
        imgSrc={star__logo}
        explrTitle="5 Star Hotels"
        priceTitle="Average Price"
        avgPrice="11,000"
        cardHeader1="THE AVION HOTEL"
        cardTitle1="One way trip"
        cardFooter1="Near Mumbai airport"
        cardHeader2="THE RAO HOTEL"
        cardTitle2="One way trip"
        cardFooter2="5.7 KM from Airport"
        cardHeader3="HOTEL AIRLINK"
        cardTitle3="One way trip"
        cardFooter3="950 M from T1 Airport"
        cardHeader4="THE EMPRESSA HOTEL"
        cardTitle4="One way trip"
        cardFooter4="7.6 KM from Airport" 
        />
    </>
  )
}

export default StayOptions