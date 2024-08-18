import searchYt from 'youtube-search-api'


export default async function search(text) {


    try {
        const response = await searchYt.GetListByKeyword(text)

        // const filterSeach = response.filter((data) => {

        // })

        const result = response?.items

        if (result.length == 0) throw new Error( 'Nada encontrado !')

        const resultFilter = result.filter((data) => {

            const { isLive, length, type } = data
            if (isLive) return

            const firstNumber = length?.simpleText.split(":")

            if (!firstNumber || firstNumber?.length > 2 || firstNumber?.[0] > 20) return
            if (type !== 'video') return

            return data


        })
        console.log('----------------------------------------');
        console.log('resultFilter',resultFilter);
        console.log('----------------------------------------');
        return {
            success:true,
            result:resultFilter
        }



    } catch (e) {
        return {
            success: false,
            result: e.message
        }
    }


}

