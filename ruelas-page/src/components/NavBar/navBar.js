export default {
  name: "navBar",
  methods: {
    
    scrollTo(id) {
      const element = document.getElementById(id);
      const container = document.querySelector(".HomeView");

      if (element && container) {
        const elementPosition = element.offsetTop;

        const scrollPosition = elementPosition - 47; // 47 is the heigth of header

        container.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    },
  },
};
