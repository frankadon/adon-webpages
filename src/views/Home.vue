<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SignaturePage />
  </div>
</template>

<script>
// @ is an alias to /src
import SignaturePage from './Signatures/SignaturePage.vue'

export default {
  name: 'Home',
  components: {
    SignaturePage
  }
}
</script>
