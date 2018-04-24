<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <ac></ac>
                <hr>
                <ant-result></ant-result>
                <hr>
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './counter/Counter.vue';
    import ac from './counter/AnotherCounter.vue';
    import Result from './counter/Result.vue';
    import AntResult from './counter/AnotherResult.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            antResult: AntResult,
            ac: ac
        }
    }
</script>

