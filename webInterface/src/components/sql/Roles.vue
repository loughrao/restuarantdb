<template>
  <div class="roles">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Role:</h2>
          <div class="input-field">
            <input placeholder="Title" id="title" type="text">
            <span class="helper-text">Role Title (varchar[100])</span>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Roles:</h2>
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
  name: 'Roles',
  data() {
    return {

    }
  }

}
</script>

<style>
.roles .content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 30px;
}
.roles h2 {
  margin: 0;
  font-size: 1.8em;
}

</style>

