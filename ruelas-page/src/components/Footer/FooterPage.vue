<template>
  <v-sheet height="150"  color="#0065ff" :class="['rounded-b-0', $vuetify.breakpoint.xs && 'mb-5']">

    <v-row justify="space-around" class="align-center heigth-100 container-footer" >
      <div >
        <i class="fa-solid fa-phone white--text"></i>
        <p class="white--text" @click="call">Phone</p>
      </div>
      <div >
        <i class="fa-brands fa-instagram white--text"></i> 
        <p class="white--text">Instagram</p>
      </div>
      <div >
        <i class="fa-brands fa-facebook"></i>
        <p class="white--text">Facebook</p>
      </div>
      <div >
        <i class="fa-regular fa-envelope"></i>
        <p class="white--text">E-MAIL</p>
      </div>
    </v-row>

   
  </v-sheet>
</template>

<script>
export default {
  name: "footerPage",
  methods: {
    call() {
      if (this.$vuetify.breakpoint.xs) {
        window.location.href = `tel:6221562893`;
      }
    },
  },
};
</script>

<style>
.container-footer > div{
 display: flex;
 align-items: center;
 gap: 5px;
}

.container-footer > div > i {
  color:white;
}

.container-footer >div > p{
  margin:0;

}
</style>