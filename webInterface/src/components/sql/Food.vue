<template>
  <div class="food">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Food Item:</h2>
          <div class="input-field">
            <input placeholder="Food Name" id="food" type="text">
            <span class="helper-text">Food Name (varchar[100])</span>
          </div>
          <div class="input-field">
            <input placeholder="Calories" id="calories" type="text">
            <span class="helper-text">Calories (int)</span>
          </div>
          <div class="input-field">
            <input placeholder="Price" id="price" type="text">
            <span class="helper-text">Price (int)</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Food:</h2>
          <button class="btn waves-effect waves-light" type="edit" name="action">
            Edit entry
          </button>
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
