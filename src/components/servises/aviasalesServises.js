// export default class AviasalesServise {
//     _baseURL = 'https://aviasales-test-api.kata.academy/'

//     getSearhId = async () => {
//         const res = await fetch(`${this._baseURL}search`)
//         if (!res.ok) throw new Error('Fetch error')
//         const data = await res.json()
//         console.log(data.searchId)
//         return data.searchId
//     }

//     getTikets = async (searchId) => {
//         const res = await fetch(`${this._baseURL}tikets?searchId=${searchId}`)
//         if (!res.ok) throw new Error('Fetch error')
//         const data = await res.json()
//         console.log(data)
//         return data
//     }
// }

export default class AviasalesServise {
    constructor() {
        this.baseURL = 'https://aviasales-test-api.kata.academy/'
    }

    getSearchID = async () => {
        const res = await fetch(`${this.baseURL}search`)
        if (!res.ok) throw new Error('Fetching faild')
        const body = await res.json()
        return body.searchId
    }

    getTickets = async (searchID) => {
        const res = await fetch(`${this.baseURL}tickets?searchId=${searchID}`)
        if (!res.ok) throw new Error('Fetching faild')
        const body = await res.json()
        return body
    }
}
