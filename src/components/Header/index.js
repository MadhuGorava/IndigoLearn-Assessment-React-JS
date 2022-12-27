import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiUserCircle} from 'react-icons/hi'
import {FaShoppingCart} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-menu-head">
        <GiHamburgerMenu size={27} color="#fff" />
        <Link to="/" className="nav-link">
          <h1 className="nav-heading">IndigoLearn</h1>
        </Link>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/buy-courses" className="nav-link">
            BUY COURSES
          </Link>
        </li>
        <li>
          <Link to="/buy-books" className="nav-link">
            BUY BOOKS
          </Link>
        </li>
        <li>
          <Link to="/programs" className="nav-link">
            PROGRAMS
          </Link>
        </li>
        <li>
          <Link to="/free-resources" className="nav-link">
            FREE RESOURCES
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        <HiUserCircle size={18} />
        <p className="text-btn">Login In/Sign Up</p>
      </button>
      <button type="button" className="logout-mobile-btn">
        <FaShoppingCart size={25} color="#fff" />
      </button>
    </div>
  </nav>
)
export default Header
