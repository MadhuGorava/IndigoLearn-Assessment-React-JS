import './index.css'
import {FiCalendar, FiBookOpen} from 'react-icons/fi'
import {BsAlarm, BsLaptop} from 'react-icons/bs'

const WhyChooseUs = () => (
  <div className="why-choose-us-container">
    <h1 className="why-choose-us-container-heading">Why Choose Us?</h1>
    <hr className="hr-line" />
    <div className="features-container">
      <div className="features-card">
        <img
          src="https://thumbs.dreamstime.com/b/hanging-light-bulb-flash-icon-concept-simple-sign-label-modern-info-education-elearning-lineart-flat-stroke-230051707.jpg"
          className="image-icon"
          alt="Expert-Faculty"
        />
        <p className="features-card-heading">Expert Faculty</p>
        <p className="features-card-description">
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
      <div className="features-card">
        <img
          src="https://www.shutterstock.com/image-vector/people-icon-group-business-leader-260nw-212492593.jpg"
          className="image-icon"
          alt="Teaching-Assistance"
        />
        <p className="features-card-heading">Complete Success Package</p>
        <p className="features-card-description">
          Leading Exam Prep Destination with Video classes. Live sessions, Doubt
          resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="features-card">
        <img
          src="https://www.shutterstock.com/image-vector/paper-money-icon-logo-isolated-260nw-1895822674.jpg"
          className="image-icon"
          alt="Bank-Notes"
        />
        <p className="features-card-heading">Placements</p>
        <p className="features-card-description">
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </div>
    <div className="features-container">
      <div className="features-details">
        <p className="features-details-heading">Levels</p>
        <div className="features-details-card">
          <FiBookOpen className="icons-style" />
          <p className="features-details-text">Three (13 papers)</p>
        </div>
      </div>
      <div className="features-details">
        <p className="features-details-heading">Duration</p>
        <div className="features-details-card">
          <BsAlarm className="icons-style" />
          <p className="features-details-text">6-30 months</p>
        </div>
      </div>
      <div className="features-details">
        <p className="features-details-heading">Exams</p>
        <div className="features-details-card">
          <BsLaptop className="icons-style" />
          <p className="features-details-text">Quarterly (Online)</p>
        </div>
      </div>
      <div className="features-details">
        <p className="features-details-heading">Exemptions</p>
        <div className="features-details-card">
          <FiCalendar className="icons-style" />
          <p className="features-details-text">Upto 9 papers</p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
