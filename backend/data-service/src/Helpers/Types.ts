export interface User {
    id?: number,
    username: string,
    created_at?: string,
    updated_at?: string,
}

export interface Tool {
    id?: number,
    name: string,
    description: string,
    url: string,
    created_at?: string,
    updated_at?: string,
}

export interface ToolProps {
    users: User[],
}