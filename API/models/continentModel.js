const axios = require('axios')

// Get all continents
const getAllContinentsMethod = async () => {
    try {
        const data = await axios.get('http://localhost:8081/ContinentList');
        return { headers: data.headers, continents: data.data };
    } catch (err) {
        console.log(err)
    }
};

module.exports = {
    getAllContinentsMethod
}