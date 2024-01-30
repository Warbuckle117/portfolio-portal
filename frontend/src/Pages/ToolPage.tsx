import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Box, Button} from '@mui/material';
import { navLinkStyles } from '../Helpers/Styles';
import './ToolPage.css'
import {Tool, User} from "../Helpers/Types";

export interface ToolProps {
    users: User[],
}


const ToolPage = () => {
    const [ToolList, setToolList] = React.useState<Tool[]>([])

    useEffect(() => {
        if(process.env.NODE_ENV === "development"){
            getToolList()
        } else {
            setToolList([])
        }
    }, [])
    
    function getToolList() {
            fetch(`${process.env.REACT_APP_DATA_SERVICE_URL}/tools`)
                .then(response => response.json())
                .then(data => console.log(data))

    }


    function renderToolList() { 
        if(ToolList.length > 0) {
            return ToolList.map((tool, index) => {
                return (
                    <Link className="tool-list-item" to={tool.url} style={navLinkStyles} key={index}>
                        <Button  color="inherit">
                            {tool.name}
                        </Button>
                    </Link>
                )
            })
        } else {
            return <div>Under Development</div>
        }
    }

    return (
        <Box className="tool-page-container">
            <h1>Tool Page</h1>
            <div>List of Tools</div>
            <br/>
            <Box className="tool-list-box">
                {renderToolList()}
            </Box>
        </Box>
    );
};

export default ToolPage;