<template>
  <div v-if="continents" class="container">
    <div v-for="continent in continents" :key="continent" class="box">
      <p>{{ continent }}</p>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      continents: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/v1/continents")
      .then((res) => res.json())
      .then((data) => {
        this.continents = data.data.continents.continents.sName;
      });
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