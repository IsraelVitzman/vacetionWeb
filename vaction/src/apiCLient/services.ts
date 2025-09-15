import { Api } from "./api"
export function Servics(fromRouter: string) {
    const URl = `https://localhost:3000${fromRouter}`

    const token = localStorage.getItem("1");
    
    
    const post = (url: any, data: any) => {
        return Api(`${URl + url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },  
            body: JSON.stringify(data)
        })
    }
    const get = (url: any) => {
        return Api(`${URl + url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },
        })
    }
    const del = (url: any) => {
        return Api(`${URl + url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            }
        })
    }
    const put = (url: any, data: any) => {
        return Api(`${URl + url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },
            body: JSON.stringify(data)
        })
    }

    return { post, get, del, put }
}