<template>
    
    <img src="" alt="About US">
    <main>
        <container title="Who are we?" msg="I am only human after all"/>
    </main>
</template>
<script>
    import container from "../text.vue";
    export default{
        components:{
            container
        }
    }
</script>
<style >
    main{
        display: flex;
        flex-basis: 100%;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5rem ;
        margin-top: 3rem ;
    }
</style>