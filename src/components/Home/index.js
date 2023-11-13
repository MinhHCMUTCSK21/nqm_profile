import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../Animated Letter'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const nameArray = [
    'N',
    'g',
    'u',
    'y',
    'ễ',
    'n',
    ' ',
    'Q',
    'u',
    'a',
    'n',
    'g',
    ' ',
    'M',
    'i',
    'n',
    'h',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br />
            I'm{' '}
            <AnimatedLetters
              letterClass={'text-animate'}
              strArray={nameArray}
              id={12}
            />
            <br />
            <AnimatedLetters
              letterClass={'text-animate'}
              strArray={jobArray}
              id={32}
            />
          </h1>
          <h2>
            Full-stack developer/ MongoDB/ Express/ ReactJS/ NodeJS/ etc...
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
