import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
export default function Layout()
{
    return(
        <div>
           <Navbar/>
           <Jumbotron/>
           <About/>
        </div>
    )
}