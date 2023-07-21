import { ReactComponent as IconMenu } from './mkicon.svg';

export default function Navbar()
{
    return(
        <nav className="navbar">
        <div className="main-heading">
            <IconMenu/>
            
        </div>
            
            <div className="navlinks">
                <a>About</a>
                <a>Contact</a>
                <button className="work-button">View Work</button>
            </div>
            
        </nav>
    )
}