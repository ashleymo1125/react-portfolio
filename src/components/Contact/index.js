import './index.scss'
import phones from '../../assets/images/phones.gif'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'


const Contact = () => {

    
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
              strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
         <div className="contact-form">
             <form>
                 <ul>
                     <li className="half">
                         <input type="text" name="name" placeHolder="Name" required></input>
                     </li>
                     <li className="half">
                         <input type="text" name="email" placeHolder="Email" required></input>
                     </li>
                     <li>
                         <input type="text" placeholder="Subject" name="subject"></input>
                     </li>
                     <li>
                         <textarea placeholder="ring ring!! hello?" name="message" required ></textarea>
                     </li>
                     <li>
                         <input type="submit" className="flat-button" value="SEND"></input>
                     </li>
                 </ul>
             </form>
         </div>
        </div>
        <img src={phones} className="myPhones"/>
        </div>
       
    )
}

export default Contact