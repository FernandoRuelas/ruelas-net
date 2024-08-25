
<style>
.navBar {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .navBar-list{
    display: flex;
  }
  .no-select .v-list-item--active {
    background-color: transparent;
  }
  
  .navBar-list .v-list-item__title {
    cursor: pointer;
  }
</style>

<template>
  <v-toolbar dense color="#0065FF" flat class="navBar">
    <v-row justify="space-between" class="align-center">
      <div class="d-flex align-center">
       
        <!-- <img src="../../../assets/imgs/logo.png" alt="" width="24px" height="24px" /> -->
        <v-toolbar-title class="white--text ml-2">{{ $t('headerTitle') }}</v-toolbar-title>
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
                  >{{ $t('home') }}</v-list-item-title
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
                  >{{ $t('about') }}</v-list-item-title
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
                  >{{ $t('packages') }}</v-list-item-title
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
                  >{{ $t('contact') }}</v-list-item-title
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
export default {
  name: "NavBar",
  methods: {
    
    scrollTo(id) {
      const element = document.getElementById(id);
      const container = document.querySelector(".HomeView");

      if (element && container) {
        const elementPosition = element.offsetTop;

        const heigthOfHeader = (id == 'about') ? 275 : 47// 47 is the heigth of header

        const scrollPosition = elementPosition - heigthOfHeader ; 
        container.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    },
  },
};

</script>
