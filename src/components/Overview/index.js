import {FaSmile} from 'react-icons/fa'
import {MdMenuBook, MdOndemandVideo, MdGroup} from 'react-icons/md'
import './index.css'

const Overview = () => (
  <>
    <div className="overview-container">
      <h1 className="content-heading">Become ACCA in 18 months</h1>
      <p className="description">
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s. Begin AACC prep with
        1FIN now.
      </p>
      <div className="icon-container">
        <div className="icon-card">
          <FaSmile />
          <div className="icon-content-card">
            <p className="content-text">Registered Users</p>
            <p className="content-text">248,755</p>
          </div>
        </div>
        <div className="icon-card">
          <MdMenuBook />
          <div className="icon-content-card">
            <p className="content-text">Courses Enrolled</p>
            <p className="content-text">65,147</p>
          </div>
        </div>
        <div className="icon-card">
          <MdOndemandVideo />
          <div className="icon-content-card">
            <p className="content-text">Minutes Watched</p>
            <p className="content-text">2,088,021,687</p>
          </div>
        </div>
        <div className="icon-card">
          <MdGroup />
          <div className="icon-content-card">
            <p className="content-text">Faculty</p>
            <p className="content-text">8 Experts</p>
          </div>
        </div>
      </div>
      <div>
        <p className="association-text">Download Brochure</p>
        <p className="co-presence-text">
          Silver Learning Partner <span className="span-text">ACCA</span>
        </p>
      </div>
    </div>
  </>
)

export default Overview
