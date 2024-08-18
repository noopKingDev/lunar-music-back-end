import dataPlaylists from '../data/playlists/data.json' assert {type:'json'}

export default async function (req, res) {

  try {

    
    return res.json({
      success: true,
      result: dataPlaylists,
    });
  } catch (error) {
    return res.json({
      success: false,
      result: 'Erro interno',
    });
  }
}
