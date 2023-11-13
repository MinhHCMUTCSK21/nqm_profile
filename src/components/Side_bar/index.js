import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/MainLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" className="Logo" />
          <h5>Quang Minh</h5>
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            to="/about"
            className="about-link"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/minh-nguy%E1%BB%85n-quang-2849aa246/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/nguyenquangminh2909/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/_n_qminh/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
