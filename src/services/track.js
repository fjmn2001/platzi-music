import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = (q) => {
    let type = 'track'
    let params = { type, q }

    return platziMusicService.get('/search', {
        params
    }).then((response) => {
        return response.data
    })
}

export default trackService
