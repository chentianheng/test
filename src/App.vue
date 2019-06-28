<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <keep-alive>
      <router-view :style="{height : myHeight}"/>
    </keep-alive>

  </div>
</template>
<script>
  export  default {
    data(){
      return{
        myHeight: (window.innerHeight) + 'px'
      }
    }
  }
</script>
<style>
  @import "./assets/common/font/font.css";
#app {
  font-family: BMW-Light,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  *{
    margin: 0;

  }
</style>
