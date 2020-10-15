new Vue({
  el: '#App',
  data() {
    return {
      searchTerm: '',
      searchResults: [] };

  },
  methods: {
    search() {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
      .then(response => {this.searchResults = response.data;})
      .catch(error => {console.log(error);})
      .finally(() => alert("404 Not Found"))
    }
  } 
});