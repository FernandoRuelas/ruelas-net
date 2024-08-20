<template>
    
    <v-toolbar dense color="#0065FF" flat class="navBar">
      
        <img src="../../assets/logo.png" alt="" width="24px" height="24px">

      <v-toolbar-title class="white--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul >
        <li>Home</li>
        <li>Packages</li>
        <li>Contact us</li>
      </ul>

    
    </v-toolbar>

</template>


<style>

.navBar{
  position: sticky;
  top: 0;
  z-index: 10;

}

.navBar  ul{
  list-style: none;
 display: flex;
 gap:15px;
 color:white;
 cursor: pointer;
}

</style>