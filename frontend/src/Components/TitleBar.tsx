import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { navLinkStyles } from '../Helpers/Styles';


export default function TitleBar() {

    return (
        <>
            <AppBar>
                <Toolbar style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Link to="/" style={navLinkStyles}><Button color="inherit">HomePage</Button></Link>
                    <Link to="/tools" style={navLinkStyles}><Button color="inherit">Tools</Button></Link>
                    <Link to="/about" style={navLinkStyles}><Button color="inherit">About</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}