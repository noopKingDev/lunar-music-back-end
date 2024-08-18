import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3000'
})


const response = await instance(
{
    method:'POST',
    data:{
        query:'mc ig '
    },
    url:'/search'
}

)

console.log(response.data)