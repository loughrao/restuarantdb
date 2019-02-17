<template>
  <div class="navbar">
    <nav class ="nav-extended maroon darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'Home' }">
          <span class="nav-title">| RestuarantDB |</span>
        </router-link>
        <router-link v-for="(tab, i) in tabs" :to="{ name: tab.title }" :key="i">
          <span class="nav-item">| {{ tab.title }} | </span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      tabs: [
        {title: 'Menus', slug: 'menus'},
        {title: 'Food', slug: 'food'},
        {title: 'Employees', slug: 'employees'},
        {title: 'Roles', slug: 'roles'},
        {title: 'Customers', slug: 'Customers'},
        {title: 'Orders', slug: 'Orders'}
      ]
    }
  }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
a.router-link-exact-active{
  color: black;
}
</style>
