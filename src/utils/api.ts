import {INews, IPicture, IUser} from "../interfaces/interfaces";

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

    getNews = async (offset: number, limit: number, authorId: number | undefined): Promise<INews[]> => {
        if (authorId !== undefined) {
            return this.addHandlers<INews[]>(fetch(`${this.baseUrl}/users/${authorId}/posts?_start=${offset}&_limit=${limit}`, {
                headers : this.headers
            }));
        }
        return this.addHandlers<INews[]>(fetch(`${this.baseUrl}/posts?_start=${offset}&_limit=${limit}`, {
            headers : this.headers
        }));
    }

    getPictures = async (offset: number, limit: number): Promise<IPicture[]> => {
        return this.addHandlers<IPicture[]>(fetch(`${this.baseUrl}/photos?_start=${offset}&_limit=${limit}`, {
            headers : this.headers
        }));
    }

    private addHandlers<T>(promise: Promise<Response>): Promise<T> {
        return promise
            .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
}

const baseUrl = process.env.REACT_APP_BASE_URL || 'https://jsonplaceholder.typicode.com'
const api = new Api(baseUrl);
export {api}