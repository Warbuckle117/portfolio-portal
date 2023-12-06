export interface User {
    username: string
}
export interface UserProps {
    users: User[]
}

export interface Tool {
    name: string,
    description: string,
    url: string
}