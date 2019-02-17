<template>
  <div class="food">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Food Item:</h2>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Food:</h2>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Food',
  data() {
    return {

    }
  }

}
</script>

<style>
.food .content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.food h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>
