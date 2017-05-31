<template>
  <el-form ref="form" :model="form" label-width="80px" style="margin:20px;width:60%;min-width:600px;"></el-form>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
