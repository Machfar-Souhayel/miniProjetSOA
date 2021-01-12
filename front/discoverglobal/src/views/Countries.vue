<template>
  <Filter @filterValue="pattern = $event" />
  <div v-if="countries" class="container">
    <div v-for="country in filteredCountries" :key="country" class="box">
      <router-link
        :to="{ name: 'Details', params: { isoCode: country.sISOCode } }"
      >
        <p>{{ country.sName }}</p>
      </router-link>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import Filter from "../components/Filter.vue";
import Spinner from "../components/Spinner.vue";
import Details from "./CountryDetails.vue";
export default {
  components: { Spinner, Details, Filter },
  data() {
    return {
      countries: null,
      pattern: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/v1/countries")
      .then((res) => res.json())
      .then((data) => (this.countries = data.data.countries.countries));
  },
  computed: {
    filteredCountries() {
      if (this.pattern)
        return this.countries.filter((country) =>
          country.sName.toLowerCase().includes(this.pattern)
        );
      return this.countries;
    },
  },
};
</script>

<style>
div.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container .box {
  display: inline-block;
  width: 26%;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  cursor: pointer;
}
.container .box a {
  text-decoration: none;
}

.container .box p {
  color: #fff;
}
</style>