<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12  col-md-12">
                <h1>Header</h1>
                <hr>
                <app-header>

				</app-header>
				 <router-view>

                </router-view>                
            </div>
        </div>
        
    </div>
</template>

<script>
import Header from './components/Header.vue';
    export default {
        components: {
            'app-header': Header
        }
    }
</script>


