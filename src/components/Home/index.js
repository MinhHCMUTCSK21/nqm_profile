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
  const jobArray = ['D', 'a', 't', 'a', ' ', 'A', 'n', 'a', 'l', 'y', 's', 't']

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
            Data analyst / Data visualization / Data modeling / Data mining /
            Python / SQL / PowerBI etc...
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
