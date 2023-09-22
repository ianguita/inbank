<template>
  <b-container fluid class="px-5">
    <b-row class="py-4">
      <b-col class="text-center offset-md-4 logo-div">
        <a href="#"><img src="../assets/logo.png" width="47" /></a>
      </b-col>
      <b-col class="d-flex justify-content-end">
        <b-button v-b-toggle.nav-collapse class="border-0">
          <img class="align-center" src="../assets/icons/burger.png" />
        </b-button>
      </b-col>
      <b-collapse id="nav-collapse" is-nav class="h-100">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>