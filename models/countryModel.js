const soapRequest = require('easy-soap-request');
const fs = require("fs");
const path = require('path')
const convert = require('xml-js');

// Get all countries
const getAllCountriesMethod = async () => {
  const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    //'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  };
  const xml = fs.readFileSync(path.join(__dirname, "/envelope/list-country-envelope.xml"), 'utf-8');

  try {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml }); // Optional timeout parameter(milliseconds) timeout: 1000
    const { headers, body, statusCode } = response;
    let dataFromSoapAPI = convert.xml2json(body, { compact: true, spaces: 4 });
    return Promise.resolve(JSON.parse(dataFromSoapAPI));
  } catch (err) {
    console.log(err)
  };
};

// Get single country
const getCountryDetailsMethod = async (countryName) => {
  const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    //'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  };
  let xml = fs.readFileSync(path.join(__dirname, "/envelope/capital-city-envelope.xml"), 'utf-8');
  xml = xml.toString().replace('SECURE_ISO_CODE', countryName);

  try {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml }); // Optional timeout parameter(milliseconds) timeout: 1000
    const { headers, body, statusCode } = response;
    let dataFromSoapAPI = convert.xml2json(body, { compact: true, spaces: 4 });
    dataFromSoapAPI = dataFromSoapAPI.toString()
      .replace('soap:Envelope', 'soapEnvelope')
      .replace('soap:Body', 'soapBody')
      .replace('m:CapitalCityResult', 'CapitalCityResult')
      .replace('m:CapitalCityResponse', 'CapitalCityResponse');
    dataFromSoapAPI = JSON.parse(dataFromSoapAPI);
    const capital = dataFromSoapAPI.soapEnvelope.soapBody.CapitalCityResponse.CapitalCityResult._text;

    return Promise.resolve({ capital: capital, flag: "lien flag" });
  } catch (err) {
    console.log(err)
  };
};


module.exports = {
  getAllCountriesMethod,
  getCountryDetailsMethod
};
