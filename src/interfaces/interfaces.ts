export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface IValuesProfile {
    name: string,
    username: string,
    email: string,
    city: string,
    phone: string,
    website: string,
    company: string
}

export interface INews {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPicture {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}

export interface IUserStorage {
    [id: number]: IUser
}