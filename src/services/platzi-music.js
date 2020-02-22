import axios from 'axios'
import configService from './config'

const platziMusicService = axios.create({
    baseURL: configService.apiUrl
})

export default platziMusicService
