<template>
  <div>
    <v-card
      
      elevation="3"
      max-width="300"
      class="rounded-md "
    >
      <v-card-title class="d-flex justify-center">
        <div class="d-flex flex-column justify-center align-center">
          <h3 class="blue--text">${{ price }}</h3>
          <h3 class="blue--text">{{ title }}</h3>
        </div>
      </v-card-title>

      <!-- <v-card-text>
        <div>
          <div>
            <h3 class="blue--text mt-3 mb-3">{{ subtitle }}</h3>
            <ul>
              <li class="mb-2" v-for="(item, index) in points" :key="index">
                <h4>{{ item }}</h4>
              </li>
            </ul>
          </div>
        </div>
      </v-card-text> -->

      <v-card-text>
        <div>
          <div>
            <h4 class="blue--text">Title</h4>
            <p>Deserunt incididunt nostrud eu quis quis anim commodo non officia.</p>
          </div>
          <div>
            <h4 class="blue--text">Title</h4>
            <p>Deserunt incididunt nostrud eu quis quis anim commodo non officia.</p>
            
          </div>
          <div>
            <h4 class="blue--text">Title</h4>
            <p>Deserunt incididunt nostrud eu quis quis anim commodo non officia.</p>
          </div>
        </div>
      </v-card-text>

       <v-card-actions class="d-flex justify-center">
        <v-btn color="primary">Contratar</v-btn>
      </v-card-actions> 
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardPackage",
  props: {
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    points: {
      type: Array,
      required: true,
    },
  },
};
</script>
