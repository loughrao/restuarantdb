<template>
  <div class="customers">
    <div class="card">
      <div class="card-content">
        <h2 class="red-text">Add New Customer:</h2>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h2 class="red-text">Current Customers:</h2>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Customers',
  data() {
    return {

    }
  }

}
</script>

<style>
.customers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.customers h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>
