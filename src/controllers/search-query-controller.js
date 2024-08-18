import search from "./helpers/search/index.js"

export default async function searchQueryController(req, res) {


    try {

        const { query } = req.body
        if(!query) throw new Error('Voçe precisa enviar um query.')
        console.log('searching by ',query)
    const response = await search(query)
    // console.log(response)
        if (!response?.success) throw new Error(response.result)
        

        res.json({
            success: true,
            result: response.result
        })

    } catch (error) {
        // console.log(error)
        return res.json({
            success: false,
            result: error.message
        })
    }

}