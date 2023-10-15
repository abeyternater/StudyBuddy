import './Navbarstyles.css';
import aplus from './media/Aplusicon.png'


function Navbar () {
    return(
        <div className="container0">
            <ul>
            <li><h1>Study Buddy Tutoring</h1></li>
            <li><img className="logo" src={aplus} alt='aplus logo' height={120} width={120} ></img></li>
            </ul>
            </div>

    )
}
export default Navbar;