<template>
  <div v-if="countryInfo" class="box">
    <h1>Country details :</h1>
    <p>ISOCode: {{ countryInfo.ISOCode }}</p>
    <p>Name: {{ countryInfo.Name }}</p>
    <p>CapitalCity: {{ countryInfo.CapitalCity }}</p>
    <p>PhoneCode: {{ countryInfo.PhoneCode }}</p>
    <p>ContinentCode: {{ countryInfo.ContinentCode }}</p>
    <p>CurrencyIsoCode: {{ countryInfo.CurrencyIsoCode }}</p>
    <p>CountryFlag:</p>
    <img :src="flag" alt="flag" />
    <p>Languages:</p>
    <ul v-for="language in countryInfo.Languages.Language.Name" :key="language">
      <li>{{ language }}</li>
    </ul>
  </div>
  <Spinner v-else />
</template>

<script>
import Spinner from "../components/Spinner.vue";
export default {
  components: { Spinner },
  props: ["isoCode"],
  data() {
    return {
      countryInfo: null,
      flag: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/v1/countries/fullInfo/" + this.isoCode)
      .then((res) => res.json())
      .then((data) => {
        this.countryInfo = data.data.country.country.FullCountryInfo;
        this.flag = this.countryInfo.CountryFlag;
      });
  },
};
</script>

<style>
.box {
  width: 300px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
}

.box ul {
  list-style-type: none;
}
</style>