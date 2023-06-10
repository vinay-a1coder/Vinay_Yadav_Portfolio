import React from 'react'
import './services.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';

function Services() {
  return (
    <section id='services'>
      <h5>Where I Have Worked</h5>
      <h2>My Experience</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3><HiOutlineOfficeBuilding /> Boxpay Technologies Pvt Ltd</h3>
            <div>
              <small> Software Developer Intern</small><br />
              <small>Gurugram | Mar 2023 - Apr 2023</small>
            </div>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Learned React.js fundamentals: components, JSX syntax, and state management.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Worked on real-world projects, collaborating with experienced developers.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Implemented React components across different projects.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Optimized React.js application performance using techniques like virtual DOM diffing and code splitting.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Developed debugging skills using React DevTools and Chrome Developer Console.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Utilized version control systems like Git and collaborated on projects using GitHub.</p>
            </li>
          </ul>
        </article>

        {/* END OF Boxpay Technologies Pvt Ltd */}

        <article className='service'>
          <div className='service_head'>
            <h3><HiOutlineOfficeBuilding /> Digital Glyphs LLP </h3>
            <div>
              <small> Front-end Developer Intern </small><br />
              <small>Work From Home | Jan 2023 - Feb 2023 </small>
            </div>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Gained proficiency in HTML, CSS, and JavaScript fundamentals during the internship.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Developed responsive and visually appealing web pages using HTML and CSS.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Implemented interactive features and functionality using JavaScript.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Collaborated with a team to work on real-world projects, applying HTML, CSS, and JavaScript knowledge.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Explored modern web development techniques, such as CSS frameworks and libraries.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Acquired experience in cross-browser compatibility and ensuring consistent user experiences.</p>
            </li>
          </ul>
        </article>

        {/* END OF Digital Glyphs LLP */}

        {/* <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>

            <li>
              <BsFillPatchCheckFill className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article> */}

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services