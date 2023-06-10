import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'
import AVTR8 from '../../assets/avatar8.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Coding Shuttle',
    review: 'MERN Stack Development Course'
  },
  {
    avatar: AVTR2,
    name: 'HackerRank',
    review: 'Java(Basic) Certificate'
  },
  {
    avatar: AVTR3,
    name: 'HackerRank',
    review: 'Problem Solving(Basic) Certificate'
  },
  {
    avatar: AVTR4,
    name: 'HackerRank',
    review: 'Problem Solving(Intermediate) Certificate'
  },
  {
    avatar: AVTR5,
    name: 'HackerRank',
    review: 'SQL(Basic) Certificate'
  },
  {
    avatar: AVTR6,
    name: 'Geeksforgeeks Profile',
    review: '1-st position in college with 380+ questions'
  },
  {
    avatar: AVTR7,
    name: 'HackerRank Profile',
    review: '5-Star in Java & Python'
  },
  {
    avatar: AVTR8,
    name: 'Leetcode Profile',
    review: '100+ DSA Problems'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Recognized for Excellence</h5>
      <h2>Honors & Awards</h2>

      <Swiper className='container testimonials_container' 
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials