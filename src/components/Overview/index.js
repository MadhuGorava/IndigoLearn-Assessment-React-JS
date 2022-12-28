import {FaSmile} from 'react-icons/fa'
import {FiBookOpen} from 'react-icons/fi'
import {MdOndemandVideo, MdGroup} from 'react-icons/md'
import RequestCall from '../RequestCall'
import './index.css'

const Overview = () => (
  <>
    <div className="overview-container">
      <div className="overview-content-card">
        <h1 className="content-heading">Become ACCA in 18 months</h1>
        <p className="description">
          Acquire globally recognized accountancy qualification, ACCA (also
          called as Global CA), and get placed in top MNCs & Big4s. Begin AACC
          prep with 1FIN now.
        </p>
        <div className="icon-container">
          <div className="icon-card">
            <div className="icon-content-card">
              <FaSmile className="icon-style" />
              <p className="content-text">Registered Users</p>
            </div>
            <p className="content-text">248,755</p>
          </div>
          <div className="icon-card">
            <div className="icon-content-card">
              <FiBookOpen className="icon-style" />
              <p className="content-text">Courses Enrolled</p>
            </div>
            <p className="content-text">65,147</p>
          </div>
          <div className="icon-card">
            <div className="icon-content-card">
              <MdOndemandVideo className="icon-style" />
              <p className="content-text">Minutes Watched</p>
            </div>
            <p className="content-text">2,088,021,687</p>
          </div>
          <div className="icon-card">
            <div className="icon-content-card">
              <MdGroup className="icon-style" />
              <p className="content-text">Faculty</p>
            </div>
            <p className="content-text">8 Experts</p>
          </div>
        </div>
        <div>
          <p className="association-text">Download Brochure</p>
          <p className="co-presence-text">
            Silver Learning Partner <span className="span-text">ACCA</span>
          </p>
        </div>
      </div>
      <RequestCall />
    </div>
  </>
)

export default Overview
