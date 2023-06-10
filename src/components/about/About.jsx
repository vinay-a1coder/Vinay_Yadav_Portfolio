import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {AiOutlineProject} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi'
import {BiAward} from 'react-icons/bi';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Months</small>
            </article>

            <article className='about_card'>
              <AiOutlineProject className='about_icon' />
              <h5>Projects</h5>
              <small>Major & Minor</small>
            </article>

            <article className='about_card'>
              <GiSkills className='about_icon' />
              <h5>Skills</h5>
              <small>Development & Technical</small>
            </article>

            <article className='about_card'>
              <BiAward className='about_icon' />
              <h5>Achievements</h5>
              <small>Additional</small>
            </article>
          </div> 
        </div>
      </div>
      <div className='container about_container_summary'>
            <p>
            I am a Web and Software Developer with 3 months of professional experience in web development. Currently in my final year of Computer Science Engineering (CSE), I possess strong skills in Data structures and Algorithms (DSA) along with a passion for Web Development.
            I am eager to continue expanding my skill set, staying up-to-date with industry trends, and providing innovative web and software development solutions.
            </p>
            <p>
            Thank you for visiting my portfolio, and I look forward to contributing my skills to your projects.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    </section>
  )
}

export default About