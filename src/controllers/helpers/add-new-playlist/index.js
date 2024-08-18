import search from "./helpers/search/index.js"

import DataPlaylist from '../../../data/playlists/data.json' assert { type : 'json'}
import {writFileSync} from 'node:fs'


export default async function addNewPlaylist(req, res) {

    try {

        if(!req?.body?.query || req.body?.query.length < 3) throw new Error('Query invalida')
    
        const response = await search(query);

        DataPlaylist.push({
            playlistName:query,
            results: response.result
        })

        writFileSync('../data/playlists/data.json', JSON.stringify(DataPlaylist))

        return res.json({
          success: true,
          result: "Playlist adicionada com sucesso !",
        });
      } catch (error) {
        return res.json({
          success: false,
          result: error,
        });
      }

}