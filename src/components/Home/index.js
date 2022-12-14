import './index.scss'
import LogoTitle from '../../assets/images/newlogo.png'
import flowers from '../../assets/images/flowers.gif'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import Logo from './Logo'
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H', 'i', ','];
    const imArray = ['I','\'','m'];
    const fnameArray = ['s','h', 'l', 'e', 'y', ' ']
    const lnameArray = ['m', 'o', 'y', 'e', 'r', 's']
    //const jobArray = ['w', 'e', 'b', ' ', 'd','e','v','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className = "container home-page">
            <div className="home-text-zone">
                <h1> <AnimatedLetters letterClass={letterClass} strArray={hiArray} inx={1}/>  <br/> <AnimatedLetters letterClass={letterClass} strArray={imArray} inx={2}/> 
                <img src={LogoTitle}/>
                <AnimatedLetters letterClass={letterClass} strArray={fnameArray} inx={7}/> <br></br>
                <AnimatedLetters letterClass={letterClass} strArray={lnameArray} inx={7}/> </h1>
                <h2> developer/ dog mom</h2>
                <Link to="/react-portfolio/contact" className='flat-button'> Contact Me</Link>
            </div>
            {/* <Logo/> */}
            <img src={flowers} className="myFlowers"/>
        </div>
    )
}

export default Home