<template>
  <div class="spin"></div>
</template>

<script>
export default {};
</script>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 200px auto;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>