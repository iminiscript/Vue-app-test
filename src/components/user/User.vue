<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <p> This is user</p>
    <hr>
    <button @click="GoToHome" class="btn btn-danger">Go to Home</button>
    <router-view>

    </router-view>
</div>
</template>
<script>
export default {
    // data: function(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     '$route'(to, from){
    //         this.id = to.params.id;
    //     }
    // },
    methods : {
      GoToHome(){
          this.$router.push({ path: '/'});
      }
  }
}
</script>
