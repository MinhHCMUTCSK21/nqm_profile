import { Outlet } from 'react-router-dom'
import Sidebar from '../Side_bar'
import './index.scss'

const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags-html ">&lt;html&gt;</span>
          <br />
          <span className="tags top-tags top-tags">&lt;body&gt;</span>

          <Outlet />

          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tags-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Layout
