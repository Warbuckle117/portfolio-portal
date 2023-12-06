import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinkStyles } from '../Helpers/Styles';

interface User {
    username: string
}

interface Tool {
    name: string,
    description: string,
    url: string
}
interface ToolProps {
    users: User[],
    tools: Tool[]
}



const ToolPage = ({users, tools}: ToolProps) => {
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
                    <Link to={tool.url}style={navLinkStyles}>
                        <Button key={index} color="inherit">
                            <div>{tool.name}</div>
                        </Button>
                    </Link>

                )
            })
        } else {
            return <div>Work in Progress</div>
        }
    }

    return (
        <div>
            <h1>Tool Page</h1>
            <div>Work in Progress</div>
            <div>List of Personal Tools</div>
            <>{renderToolList()}</>
        </div>
    );
};

export default ToolPage;