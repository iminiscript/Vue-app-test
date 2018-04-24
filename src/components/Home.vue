<template>
    <div>
        <h1>The Home Page</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
            dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
            voluptatem.</p>
            <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filtered">{{ fruit }}</li>
                </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon', 'test'],
                filterText: ''
            }
        },
        computed: {
            filtered() {
                return this.fruits.filter((element) => {
                    return element.toLowerCase().match(this.filterText.toLowerCase());
                });
            }
        }
    }
</script>

<style>
</style>
