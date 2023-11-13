import './index.scss'
import LogoS from '../../../assets/images/my_ava.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="my ava" />
    </div>
  )
}

export default Logo
