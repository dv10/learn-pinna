<script setup>
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { userStore } from '../store/index';
    const user = userStore();
    const {name: traditionName, iphone: traditionIphone} = user
    const { name, iphone, obj } = storeToRefs(user);
    defineProps({
        msg: String,
    });
</script>

<template>
    <div>
        <h1>基础显示和获取pinia数据方法</h1>
        <h4>{{ msg }}</h4>
        <h5>使用方式一: 传统不结构 {{user.iphone}}--{{user.name}}</h5>
        <h5>使用方式二: 传统结构方式 初始化有效 修改后无效 {{traditionName}} {{traditionIphone}}</h5>
        <h5>使用方式三: 使用storeToRefs后解构 {{iphone}}--{{name}}</h5>
         <p>{{obj.title}}</p>
         <p v-for="x in obj.list" :key="x.name">name: {{x.name}}, age: {{x.age}}</p>
         <p>stock: {{obj.person.stock.code}} ,money:{{obj.person.money}}</p>
         <p>{{user.getIphone}}</p>
         <p>{{user.getIphone}}</p>
         <p>{{user.getIphone}}</p>
         <p>{{user.getIphone}}</p>
         <p>{{user.getFunMethod('ddddd')}}</p>
    </div>

</template>

<style scoped>
</style>
