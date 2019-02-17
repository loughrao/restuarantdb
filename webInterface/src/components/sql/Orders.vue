<template>
  <div class="orders">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Order:</h2>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Orders:</h2>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {

    }
  }

}
</script>

<style>
.orders .content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.orders h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>
