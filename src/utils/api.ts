import {INews, IUser} from "../interfaces/interfaces";


export class Api {
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.headers = {
            'Content-Type': 'application/json'
        }
    }

    private readonly headers: HeadersInit
    private readonly baseUrl: string

    getUserInfo = async (): Promise<IUser> => {
        return this.addHandlers<IUser>(fetch(`${this.baseUrl}/users/1`, {
            headers : this.headers
        }));
    }

    getAllUsers = async (): Promise<IUser[]> => {
        return this.addHandlers<IUser[]>(fetch(`${this.baseUrl}/users`, {
            headers : this.headers
        }));
    }



    updateProfileInfo = async (user: IUser): Promise<IUser> => {
        return this.addHandlers<IUser>(fetch( `${this.baseUrl}/users/1`, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(user)
        }));
    }

    getNews = async (limit: number): Promise<INews[]> => {
        return this.addHandlers<INews[]>(fetch(`${this.baseUrl}/posts?_start=0&_limit=${limit}`, {
            headers : this.headers
        }));
    }

    getNewsUser = async (authorId: number, limit: number): Promise<INews[]> => {
        return this.addHandlers<INews[]>(fetch(`${this.baseUrl}/users/${authorId}/posts?_start=0&_limit=${limit}`, {
            headers : this.headers
        }));
    }


    private addHandlers<T>(promise: Promise<Response>): Promise<T> {
        return promise
            .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
}

const api = new Api('https://jsonplaceholder.typicode.com');
export {api}