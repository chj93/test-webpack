<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <child1/>
    <child2/>
    <child3/>
    <CssModule1/>
  </div>
</template>

<script>
  import Child1 from "./components/Child1"
  import Child2 from "./components/Child2"
  import Child3 from "./components/Child3"
  import CssModule1 from "./components/CssModule1";

export default {
  name: 'app',
  components: {Child1, Child2, Child3,CssModule1},
  data () {
    return {
      msg: Child1.data()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
