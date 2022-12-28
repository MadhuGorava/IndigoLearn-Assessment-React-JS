import './index.css'

const WhatWillYOuLearn = () => (
  <div className="wwyl-container">
    <h1 className="wwyl-container-heading">What Will You Learn in ACCA?</h1>
    <hr className="hr-line" />
    <div className="wwyl-details-container">
      <div className="wwyl-details-card">
        <div className="header">
          <h1 className="header-text">Knowledge Level</h1>
        </div>
        <div className="content">
          <ul>
            <li>Business And Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ul>
        </div>
        <div className="footer">
          <p className="footer-text">3 papers</p>
        </div>
      </div>
      <div className="wwyl-details-card">
        <div className="header">
          <h1 className="header-text">Skill Level</h1>
        </div>
        <div className="content">
          <ul>
            <li>Corporate and Business Law (LW)</li>
            <li>Perform Management (PM)</li>
            <li>Taxation (TX)</li>
            <li>Financial Reporting (FR)</li>
            <li>Audit and Assurance (AA)</li>
            <li>Financial Management (FM)</li>
          </ul>
        </div>
        <div className="footer">
          <p className="footer-text">6 papers</p>
        </div>
      </div>
      <div className="wwyl-details-card">
        <div className="header">
          <h1 className="header-text">Professional Level</h1>
        </div>
        <div className="ex-content">
          <p className="ex-content-text">Compulsory</p>
          <ul>
            <li>SBL - Strategic Business Leader</li>
            <li>SBR - Strategic Business Reporting</li>
          </ul>
          <p className="ex-content-text">Two out of the following</p>
          <ul>
            <li>Advanced Financial Management (AFM)</li>
            <li>Advanced Performance Management (APM)</li>
            <li>Advanced Taxation (ATX)</li>
            <li>Advanced Audit and Assurance (AAA)</li>
          </ul>
        </div>
        <div className="footer">
          <p className="footer-text">4 papers</p>
        </div>
      </div>
    </div>
  </div>
)

export default WhatWillYOuLearn
