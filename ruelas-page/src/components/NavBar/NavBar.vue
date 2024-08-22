
<style>
@import './style.css';
</style>

<template>
  <v-toolbar dense color="#0065FF" flat class="navBar">
    <v-row justify="space-between" class="align-center">
      <div class="d-flex align-center">
       
        <img src="../../assets/logo.png" alt="" width="24px" height="24px" />
        <v-toolbar-title class="white--text ml-2">Title</v-toolbar-title>
      </div>
      <div>
        <v-list
          class="navBar-list"
          style="background: #0065ff"
          no-action
          rounded
        >
          <!-- <v-list-item-group class="d-flex align-center no-select"> -->
          <v-list-item>
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title class="white--text" @click="scrollTo('home')"
                  >Home</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  @click="scrollTo('about')"
                  >About</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  @click="scrollTo('packages')"
                  >Packages</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{}">
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  @click="scrollTo('contact')"
                  >Contact</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <!-- </v-list-item-group> -->
        </v-list>
      </div>
    </v-row>
  </v-toolbar>
</template>



<script>
import navBAr from './navBar.js'
export default navBAr;
</script>
