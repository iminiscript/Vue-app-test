<template>
    <div class="">
    <ul class="nav">
        <router-link to="/" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link> 
        <router-link to="/user" tag="li" active-class="active"><a class="nav-link">Users</a></router-link>
        <router-link to="/shop" tag="li" active-class="active"><a class="nav-link">Shop</a></router-link>
        <router-link to="/form" tag="li" active-class="active"><a class="nav-link">form</a></router-link>
        <router-link to="/counter" tag="li" active-class="active"><a class="nav-link">Counters</a></router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right" style="float:right;">
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </li>
                </ul>
</div>
</template>
<script>

export default {
    data() {
        return {
            isDropdownOpen: false
        }
    }
}

</script>

<style scoped>
.open .dropdown-menu {
    display: block;
}
</style>


