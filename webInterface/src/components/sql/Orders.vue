<template>
  <div class="orders">
    <div class="content">
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Add New Order:</h2>
          <div class="input-field">
            <input placeholder="Food item" id="food" type="text">
            <span class="helper-text">Select Food to Add to Order</span>
          </div>
          <div class="input-field">
            <input placeholder="Customer name" id="customer" type="text">
            <span class="helper-text">Select Customer</span>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="red-text">Current Orders:</h2>
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
