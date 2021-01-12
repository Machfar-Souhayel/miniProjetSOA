const axios = require('axios')

// Get all countries
const getAllCountriesMethod = async () => {
  try {
    const data = await axios.get('http://localhost:8081/CountryList');
    return { headers: data.headers, countries: data.data };
  } catch (err) {
    console.log(err)
  }
};

// Get single country name by isoCode
const getCountryByIsoCodeMethod = async (countryISOCode) => {
  try {
    const data = await axios.get('http://localhost:8081/CountryISOCode',
      {
        data: { isoCode: countryISOCode }
      });
    return { headers: data.headers, country: data.data };
  } catch (err) {
    console.log(err)
  }
};

// Get all country info by isoCode
const getFullCountryInfoByIsoCodeMethod = async (countryISOCode) => {
  try {
    const data = await axios.get('http://localhost:8081/FullCountryInfo',
      {
        data: { isoCode: countryISOCode }
      });
    return { headers: data.headers, country: data.data };
  } catch (err) {
    console.log(err)
  }
};


module.exports = {
  getAllCountriesMethod,
  getCountryByIsoCodeMethod,
  getFullCountryInfoByIsoCodeMethod
};
