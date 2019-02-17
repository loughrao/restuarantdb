<template>
  <div class="home">
    <div class="card" v-for="(tab, i) in tabs" :key="i" @click="goTo(tab.title)">
      <div class="card-content">
        <h2 class="red-text">{{ tab.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
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
  },
  methods: {
    goTo(slug) {
      this.$router.push({ name: slug })
    }
  }
}
</script>

<style >
.home{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.home h2{
  margin: 0;
  font-size: 1.8em;
  text-align: center;
}
.home .card {
  cursor: pointer;
}
</style>
