<template>
  <div>
    <h1>{{msg}}</h1>
    <div>
      <router-link to="/" exact>Simple /</router-link>
      <router-link to="/home" exact>Simple /home</router-link>
      <router-link :to="{name: 'Home'}" exact>Simple name: Home</router-link>
      <router-link to="/unknown" exact>Unknown path</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
	data () {
		return {
			msg: 'Hello from VueJS!'
		}
	}
}
</script>

<style>
  .active {
    background: grey;
  }
</style>