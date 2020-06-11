<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ fields.test_title[0].text }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      fields: {
        test_title: null,
        richtext: null,
        image1: null,
      }
    }
  },

  props: {
    msg: String,
  },
  methods: {
    async getContent() {
      const data = await this.$prismic.client.getSingle("homepage");
      console.log(data);
      this.fields.test_title = data.data.test_title;
      this.fields.richtext = data.data.richtext;
      this.fields.image1 = data.data.image1;
      console.log(this.fields.test_title);
    },
  },

  created() {
    this.getContent();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
