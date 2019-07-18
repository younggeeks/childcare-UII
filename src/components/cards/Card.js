import React, { Fragment } from 'react';
import PrimaryBtn from '../Button'
import './cards.scss'

const Cards = () => {
    return (
        <Fragment>
           <div className='cards__container'>
               <div className='cards__card'>
                   <div className='cards__icon'></div>
                   <div className='cards__title'>Send Donation</div>
                   <div className='cards__description'>
                       see how you can make a difference in families lives with just $6 a month.
                   </div>
                   <PrimaryBtn padding={19}>Learn More</PrimaryBtn>
               </div>
               <div className='cards__vertical'></div>

               {/*  */}
               <div className='cards__card'>
                   <div className='cards__icon'></div>
                   <div className='cards__title'>Save The Child</div>
                   <div className='cards__description'>
                       see how you can make a difference in families lives with just $6 a month.
                   </div>

               </div>
               <div className='cards__vertical'></div>

               {/*  */}
               <div className='cards__card'>
                   <div className='cards__icon'></div>
                   <div className='cards__title'>Become Volunteer</div>
                   <div className='cards__description'>
                       see how you can make a difference in families lives with just $6 a month.
                   </div>

               </div>
           </div>
        </Fragment>
    )
}

export default Cards;
