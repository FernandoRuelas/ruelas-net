export default {
  name: "navBar",
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
