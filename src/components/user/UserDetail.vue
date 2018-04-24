<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p> This is USER id: {{ $route.params.id }} </p>
        <router-link 
            tag="button"
            :to="'/user/' + $route.params.id + '/edit'"
            class="btn btn-block btn-primary">
            Edit User
        </router-link>
         <hr>
        <router-link 
            tag="button"
            :to="{ name: 'userEdit', params: { id: $route.params.id } }"
            class="btn btn-block btn-primary">
            Edit User
        </router-link>
    </div>
</template>