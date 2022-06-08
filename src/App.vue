<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import HelloWorld from './components/HelloWorld.vue';
    import ChangePinia from './components/ChangePinia.vue';
</script>

<template>
    <div>
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        />
        <HelloWorld msg="Hello Vue 3 + Vite+pinna" />
        <ChangePinia msg="本组件触发改变pinna 数据改变" />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
