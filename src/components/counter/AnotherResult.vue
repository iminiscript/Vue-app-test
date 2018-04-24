<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>clicks is: {{ clickCounter }}</p>
        
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters([ 
                'doubleCounter',
                'clickCounter'
            ])
        }
    
</script>