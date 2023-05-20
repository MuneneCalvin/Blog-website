import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                My Blog
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sport">Sports</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header