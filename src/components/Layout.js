import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Contactform from "./Contactform";
import Footer from './Footer';
export default function Layout()
{
    return(
        <div>
           <Navbar/>
           <Jumbotron/>
           <About/>
           <Contactform/>
           <Footer/>
        </div>
    )
}