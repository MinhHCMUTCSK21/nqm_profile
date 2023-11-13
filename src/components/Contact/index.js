import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../Animated Letter'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Logo from '../../assets/images/MainLogo.png'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_gl79l8n',
        'template_vk7eibd',
        form.current,
        'tVBQ6txAw3QdDc086'
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
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={'text-animate-about'}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Liên hệ trực tiếp qua form dưới đây, hoặc qua địa chỉ liên hệ được
            ghim
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subtitle"
                    name="subtitle"
                    required
                    type="text"
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nguyễn Quang Minh,
          <br />
          Việt Nam,
          <br />
          53/1 Đường số 4 nối dài, khu dân cư Lê Thành, phường An Lạc, quận Bình
          Tân <br />
          Thành phố Hồ Chí Minh
          <br />
          <br />
          <span>Email: ngquangminh2909@gmail.com</span>
        </div>
        <div className="map-wrap"></div>
        <div className="Logo_img">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
