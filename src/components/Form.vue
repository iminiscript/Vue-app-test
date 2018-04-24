<template>
  <div>
      <div class="">
            <h1>Http</h1>
            <div class="">
                <label>Username</label>
                <input class="" type="text" v-model="user.username">
            </div>
            <div class="">
                <label>Mail</label>
                <input class="" type="text" v-model="user.email">
            </div>
            <button class="" @click="submit">Submit</button>
            <hr>
            <br><br>
            <button class="" @click="fetchData">Get Data</button>
            <br><br>
            <ul class="">
                <li class="" v-for="name in users">{{ name.username}} <br/> {{ name.email }}</li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                email: ''
            },
            users: [],
            resource: {},
            node: 'data'
        };
    },
    methods: {
        submit() {
            this.$http.post('', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
    
        },
        fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            
        }
    }
}
</script>

<style>

</style>
