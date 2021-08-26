import React from 'react';
import './About.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends React.Component {
  render() {
    return(
      <div className="About">
        <h1 className="Title-name">About Project</h1>
        <p>I built this project in my spare time. I used this as a playground to learn MERN stack 🐱‍👤🚀.</p>
        <p className="Mt-0">The source code of the website can be seen on <a href="https://github.com/p4panash/dank-soundboard-site">my GitHub repository</a>.</p>
        <p className="Mt-0">Also, the discord bot's source code can be found on <a href="https://github.com/p4panash/dank-soundboard-bot">this GitHub repo</a>.</p>
        <p className="Mt-0">For any issues or improvement ideas, feel free to open a ticket on the above repos.</p>

        <p className="Mt-50">You can reach me on:</p>
        <div>
          <a href="https://github.com/p4panash"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href="https://www.linkedin.com/in/cătălin-muntean-0a00591a6/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          <a href="mailto:muntean.catalin.avram@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
        </div>
        <p>Thank you!</p>
      </div>
    );
  }
}

export default About;