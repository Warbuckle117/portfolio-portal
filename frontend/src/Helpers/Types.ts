export interface User {
    username: string
}

export interface Tool {
    name: string,
    description: string,
    url: string
}

export interface ToolProps {
    users: User[],
}