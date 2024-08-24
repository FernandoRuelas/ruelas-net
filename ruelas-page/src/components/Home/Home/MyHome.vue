

<template>
  <div>
    <div id="home">
      <div class="background-container container-flayer">
        <div>
          <h2>{{ $t("title") }}</h2>
          <h4>{{ $t("subtitulo") }}</h4>
        </div>
        <img src="../../../assets/imgs/imgPrincipal.png" />
      </div>
    </div>
  </div>
</template>

<script>
import "./Style.css";

export default {
  name: "MyHome",
  data: () => ({}),
  methods: {},
};
</script>
