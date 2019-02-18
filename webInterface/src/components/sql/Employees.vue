<template>
  <div class="employees">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Employee:</h2>
          <div class="input-field">
            <input placeholder="First name" id="fname" type="text">
            <span class="helper-text">First Name (varchar[100])</span>
          </div>
          <div class="input-field">
            <input placeholder="Last name" id="lname" type="text">
            <span class="helper-text">Last Name (varchar[100])</span>
          </div>
          <div class="input-field">
            <input placeholder="Role" id="role" type="text">
            <span class="helper-text">Select Role</span>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Employees:</h2>
          <button class="btn waves-effect waves-light" type="edit" name="action">
            Edit entry
          </button>
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

