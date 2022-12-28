import RequestCall from '../RequestCall'
import './index.css'

const Journey = () => (
  <div className="journey-container">
    <div className="journey-card">
      <h1 className="related-text">
        Kick off your ACCA Prep journey with IndigoLearn
      </h1>
      <p className="related-description">
        Sign-in and get instant access to our Courses
      </p>
      <div className="text-card">
        <p className="co-presence-text">Silver Learning Partner</p>
        <p className="span-text">ACCA</p>
      </div>
    </div>
    <RequestCall />
  </div>
)

export default Journey
