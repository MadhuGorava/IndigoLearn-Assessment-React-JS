import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import './index.css'

const qualificationList = [
  {id: 1, value: 'B.tech'},
  {id: 2, value: 'B.com'},
  {id: 3, value: 'BA'},
]

const interestInList = [
  {id: 1, value: 'Developer'},
  {id: 2, value: 'System Engineer'},
  {id: 3, value: 'Software Engineer'},
]

class RequestCall extends Component {
  state = {phoneNumber: '', emailId: '', showSubmitError: false, errorMsg: ''}

  onChangeNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailId: event.target.value})
  }

  getFailSubmission = () => {
    this.setState({
      showSubmitError: true,
      errorMsg: 'Please Fill Necessary Information',
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    if (userDetails === '') {
      this.getFailSubmission()
    }
  }

  render() {
    const {phoneNumber, emailId, showSubmitError, errorMsg} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <h1 className="call-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <input
          type="text"
          id="number"
          className="input-field"
          placeholder="Phone Number*"
          value={phoneNumber}
          onChange={this.onChangeNumber}
        />
        <input
          type="text"
          id="email"
          className="input-field"
          placeholder="Email Id"
          value={emailId}
          onChange={this.onChangeEmail}
        />
        <select
          className="language-dropdown"
          placeholder="Current Qualification"
        >
          {qualificationList.map(eachOption => (
            <option key={eachOption.id} value={eachOption.value}>
              {eachOption.value}
            </option>
          ))}
        </select>
        <select className="language-dropdown" placeholder="Interested In">
          {interestInList.map(eachOption => (
            <option key={eachOption.id} value={eachOption.value}>
              {eachOption.value}
            </option>
          ))}
        </select>
        <Popup
          modal
          trigger={
            <button type="submit" className="request-btn">
              Request Call Back
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="ModalContainer">
              <button
                type="button"
                className="CloseButton"
                onClick={() => close()}
              >
                <IoMdClose size="30" color="#616e7c" />
              </button>
              <div className="modal-text-card">
                <TiTick className="icon" />
                <p className="response-text">Thank You! For Your Response</p>
              </div>
            </div>
          )}
        </Popup>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    )
  }
}

export default RequestCall
