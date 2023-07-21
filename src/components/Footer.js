import { ReactComponent as IconMenu } from './mkicon.svg';
export default function Footer()
{
    return(
        <div className="footer-container">
            <div className="footer">
                <IconMenu/>
                <div className="footer-links">
                    <a>Linkedin</a>
                    <a>Github</a>
                    <a>Dribble</a>
                </div>
            
            </div>
         <h2>Copyright © 2023 Muzammil Khan. All rights reserved.</h2>
        </div>
        
    )
}