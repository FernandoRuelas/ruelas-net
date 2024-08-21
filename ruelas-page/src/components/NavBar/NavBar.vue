<template>

    <v-toolbar dense color="#0065FF" flat class="navBar">
    <v-row justify="space-between px-5" class="align-center">
      <div class="d-flex align-center">
        <img src="../../assets/logo.png" alt="" width="24px" height="24px" />
        <v-toolbar-title class="white--text ml-2">Title</v-toolbar-title>
      </div>
      <div>
        <v-list  class="navBar-list" style="background: #0065ff" no-action rounded>
          <v-list-item-group class="d-flex align-center">
            <v-list-item>
              <template v-slot:default="{}">
                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Home</v-list-item-title
                  >
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:default="{}">
                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >About</v-list-item-title
                  >
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:default="{}">
                <v-list-item-content>
                  <v-list-item-title class="white--text"
                    >Packages</v-list-item-title
                  >
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:default="{}">
                <v-list-item-content>
                  <v-list-item-title class="white--text mb-2"
                    >Contact</v-list-item-title
                  >
                </v-list-item-content>
              </template>
            </v-list-item>
            
          </v-list-item-group>
        </v-list>
      </div>
    </v-row>

  </v-toolbar>

 
</template>

<style>
.navBar {
  position: sticky;
  top: 0;
  z-index: 10;
}

</style>
