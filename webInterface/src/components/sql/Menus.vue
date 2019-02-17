<template>
  <div class="menus">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Menu:</h2>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Menus:</h2>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Menus',
  data() {
    return {

    }
  }

}
</script>

<style>
.menus .content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.menus h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>
