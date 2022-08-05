import './index.scss'
import phones from '../../assets/images/phones.gif'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {


    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const form = useRef();
  
      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_7r008tr',
            'template_9t4f7dv',
            form.current,
            '-FtrnQCPNn1vIgz_l'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <div id="wrapper">
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required></input>
                                </li>
                                <li className="half">
                                    <input type="text" name="email" placeholder="Email" required></input>
                                </li>
                                <li>
                                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                                </li>
                                <li>
                                <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <img src={phones} className="myPhones" />
            </div>
        </div>

    )
}

export default Contact