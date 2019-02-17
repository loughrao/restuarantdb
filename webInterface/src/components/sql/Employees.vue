<template>
  <div class="employees">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Employee:</h2>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Employees:</h2>
        </div>
      </div>
  </div>
  
</template>

<script>
export default {
  name: 'Employees',
  data() {
    return {

    }
  }

}
</script>

<style>
.employees {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.employees h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>

