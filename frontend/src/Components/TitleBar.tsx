import { Link } from 'react-router-dom';
import "./TitleBar.css";

export default function TitleBar() {
    return (
        <div className="title-bar">
            <Link to="/" ><button className="title-bar-button">Home</button></Link>
            <div> Mark Arbuckle</div>
            <Link to="/About"><button className="title-bar-button">About</button></Link>
        </div>
    )
}