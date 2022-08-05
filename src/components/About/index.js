import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular,faHtml5, faReact, faCss3, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <div className = "container home-page">
           <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi! <br></br> My name is Ashley, and I am someone who enjoys programming not only as a hobby,<br></br> but a career as well.
          </p>
          <p align="LEFT">
            Within my last few roles, I have been lucky enough to learn more of the following languages/frameworks displayed on right.
          </p>
          <p>
            I hope you can tell from this portfolio that programming allows me to express my style while also growing in my problem solving skills
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon  icon={faAngular}color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
       
    )
}

export default Home