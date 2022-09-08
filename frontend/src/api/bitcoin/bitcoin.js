import axios from "axios"

function getRate() {
    return axios.get("https://blockchain.info/ticker")
        .then(response => response.data)
        .catch(err => {
            console.err(err)
        })
}

export default getRate