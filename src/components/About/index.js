import {
  faCss3,
  faGitAlt,
  faGoogle,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../Animated Letter'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faChartSimple,
  faDatabase,
  faTable,
} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={'text-animate-about'}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Xin chào,mình là Nguyễn Quang Minh. Hiện là sinh viên năm 3 chuyên
            ngành khoa học máy tính tại đại học Bách Khoa, Đại học Quốc Gia
            TPHCM
          </p>
          <p>
            Mong muốn của mình là trở thành một chuyên viên phân tích dữ
            liệu-data analyst,dù không có nhiều kinh nghiện nhưng mình luôn khao
            khát học hỏi mỗi ngày để phát triển bản thân, đối mặt với thử thách
            để học hỏi được nhiều điều quý giá.Mình có thể làm việc trong môi
            trường áp lực cao, giao tiếp ổn, có khả năng làm việc nhóm cũng như
            làm việc độc lập, có trách nhiệm với công việc
          </p>
          <p>
            Mình có kiến thức về các ngôn ngữ lập trình như python, javascript,
            sql, cũng như các công cụ hỗ trợ phân tích dữ liệu như powerbi,
            tableau, excel, .... Đặc biệt mạnh trong việc sử dụng python và các
            thư viện liên quan để xử lí các nghiệp vụ về dữ liệu
          </p>
          <a
            href="https://drive.google.com/file/d/1pHs0DMWbahyOmpWhDEs01QwLPi-pwjCh/view?usp=sharing"
            className="link"
          >
            <p>CV của tôi: click here</p>
          </a>
          <p>
            Nếu có bất cứ nhu cầu tuyển việc làm, có thể liên hệ cho mình ở
            trong phần contact
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#689f63" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDatabase} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGoogle} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faChartSimple} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faTable} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
