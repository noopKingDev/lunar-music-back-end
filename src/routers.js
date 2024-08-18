import {Router} from 'express'

import searchQueryController from './controllers/search-query-controller.js';
import streamAudio from './controllers/stream-audio-controller.js'
import musicsHome from './controllers/musics-home-controller.js'
const routers = Router()

routers.get('/', (req, res) => res.send('hello'))


routers.get('/playlists', musicsHome)
routers.get('/stream', streamAudio)
routers.post('/search', searchQueryController)

export default routers;