<template>
  <div class="menus">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Menu</h2>
          <div class="input-field">
            <input placeholder="Menu Name" id="name" type="text">
            <span class="helper-text">Menu Name (varchar[100])</span>
          </div>
          <div class="input-field">
            <input placeholder="Food item" id="food" type="text">
            <span class="helper-text">Select Food to Add to Menu</span>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Menus:</h2>
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
  name: 'Menus',
  data() {
    return {

    }
  },
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
