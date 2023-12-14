import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Box, Button} from '@mui/material';
import { navLinkStyles } from '../Helpers/Styles';
import './ToolPage.css'
import {Tool, ToolProps} from "../Helpers/Types";





const ToolPage = ({users}: ToolProps) => {
    const [ToolList, setToolList] = React.useState<Tool[]>([])

    useEffect(() => {
        getToolList()
    }, [])
    
    function getToolList() {
        fetch("http://localhost:3102/tools")
            .then(response => response.json())
            .then(data => setToolList(data.testTools))
    }

    function renderToolList() { 
        if(ToolList) {
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
            return <div>Work in Progress</div>
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