import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { navLinkStyles } from '../Helpers/Styles';


export default function TitleBar() {

    return (
        <>
            <AppBar>
                <Toolbar style={{ justifyContent: "flex-end" }}>
                    <Link to="/" style={navLinkStyles}><Button color="inherit">HomePage</Button></Link>
                    <Link to="/users" style={navLinkStyles}><Button color="inherit">Users</Button></Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}