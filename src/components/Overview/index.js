import {Component} from 'react'
import {FaSmile} from 'react-icons/fa'
import {MdOutlineMenuBook, MdOndemandVideo, MdGroup} from 'react-icons/md'
import './index.css'

class Overview extends Component {
  state = {phoneNumber: '', emailId: '', qualification: '', interestedIn: ''}

  renderIndigoLearnOverview = () => (
    <div>
      <h1>Become AACC in 18 months</h1>
      <p>
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s. Begin AACC prep with
        1FIN now.
      </p>
      <div>
        <div>
          <FaSmile />
          <p>Registered Users</p>
          <p>248,755</p>
        </div>
        <div>
          <MdOutlineMenuBook />
          <p>Courses Enrolled</p>
          <p>65,147</p>
        </div>
        <div>
          <MdOndemandVideo />
          <p>Minutes Watched</p>
          <p>2,088,021,687</p>
        </div>
        <div>
          <MdGroup />
          <p>Faculty</p>
          <p>8 Experts</p>
        </div>
      </div>
      <p>Download Brochure</p>
      <p>
        Silver Learning Partner <span>ACCA</span>
      </p>
    </div>
  )

  renderCallBackForm = () => {
    const {phoneNumber, emailId} = this.state
    return (
      <div>
        <form>
          <h1>Aspiring to be an ACCA? Get in touch with us!</h1>
          <input
            type="text"
            id="number"
            placeholder="Phone Number*"
            value={phoneNumber}
            onChange={this.onChangeNumber}
          />
          <input
            type="text"
            id="email"
            placeholder="Email Id"
            value={emailId}
            onChange={this.onChangeEmail}
          />
          <select></select>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Madhu</h1>
      </div>
    )
  }
}

export default Overview
