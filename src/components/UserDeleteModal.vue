<template>
    <div>
        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Deleting- {{ user.firstName }} {{ user.lastName }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Are you sure that you would like to delete?</h5>
        <p>{{ users.firstName }} {{ users.lastName }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteUser() {
                this
            }
        }
    }
</script>

<style scoped>

</style>