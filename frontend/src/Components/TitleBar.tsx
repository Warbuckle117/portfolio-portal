import {AppBar, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import "./TitleBar.css"

export default function TitleBar() {

    return (
        <>
            <AppBar className="title-bar-container" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} >
                    <Link to="/" className="title-bar-link" >
                        <Button>Home</Button>
                    </Link>
                    <Link to="/tools" className="title-bar-link" >
                        <Button>Tools</Button>
                    </Link>
                    <Link to="/about" className="title-bar-link" >
                        <Button>About</Button>
                    </Link>
            </AppBar>
            <br />
            <br />
        </>
    )
}