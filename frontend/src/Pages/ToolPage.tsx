import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Box, Button} from '@mui/material';
import { navLinkStyles } from '../Helpers/Styles';
import './ToolPage.css'
import {Tool, User} from "../Helpers/Types";

export interface ToolProps {
    users: User[],
}

const DATA_SERVICE_URL = process.env.DATA_SERVICE_PORT || 'http://localhost:3102'

const ToolPage = () => {
    const [ToolList, setToolList] = React.useState<Tool[]>([])

    useEffect(() => {
        getToolList()
    }, [])
    
    function getToolList() {
        fetch(`${DATA_SERVICE_URL}/tools`)
            .then(response => response.json())
            .then(data => setToolList(data))
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
            return <div>Loading Tools...</div>
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
            <div>Work in Progress</div>
        </Box>
    );
};

export default ToolPage;