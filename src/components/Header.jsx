import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                NEWS
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Sport">Sports</a></li>
                    <li><a href="/Business">Business</a></li>
                    <li><a href="/Technology">Technology</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header