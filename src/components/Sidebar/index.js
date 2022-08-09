import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/newlogo.png'
import LogoSubtitle from '../../assets/images/name.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className ='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className = "sublogo"src={LogoSubtitle} alt="logo"/>
        </Link>
        <nav>
        <NavLink extract ="true" activeclassname="active" to="/react-portfolio/">
            <FontAwesomeIcon icon={faHome} color="#402872"/>
        </NavLink>
        <NavLink extract ="true" activeclassname="active" className ="about-link" to="/react-portfolio/about">
            <FontAwesomeIcon icon={faUser} color="#402872"/>
        </NavLink>
        <NavLink extract ="true" activeclassname="active" className="contact-link"to="/react-portfolio/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#402872"/>
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ashley-m-a565b8163/'>
                    <FontAwesomeIcon icon={faLinkedin} className="contact-link"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ashley-m-a565b8163/'>
                    <FontAwesomeIcon icon={faGithub} className="contact-link"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar