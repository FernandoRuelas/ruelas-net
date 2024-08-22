export default {
  name: "navBar",
  methods: {
    
    scrollTo(id) {
      const element = document.getElementById(id);
      element &&
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
};
