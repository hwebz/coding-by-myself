<template>
  <div id="app">
   <b-jumbotron  bg-variant="info" text-variant="white">
      <template slot="header">
        Getting Started with Vuex
      </template>
      <template slot="lead">
        Built using Bootstrap-Vue.js
      </template>
    </b-jumbotron>

    <b-container>
      <b-nav pills>
        <router-link class="nav-link" to="/" exact>Counter</router-link>
        <router-link class="nav-link" to="/todo">Todo</router-link>
      </b-nav>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
.active {
  background-color: #17A2B8 !important;
}
</style>
