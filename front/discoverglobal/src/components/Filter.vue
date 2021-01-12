<template>
  <input @keyup="getSerchValue" type="text" placeholder="search.." />
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    getSerchValue(e) {
      this.$emit(
        "filterValue",
        document.getElementsByTagName("input")[0].value
      );
    },
  },
};
</script>

<style>
input[type="text"] {
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  margin-bottom: 30px;
}
</style>