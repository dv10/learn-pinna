<script setup>
    import { userStore } from '../store/index';
    const user = userStore();
    defineProps({
        msg: String,
    });
    const changeIphone = () => {
        console.log('action');
        user.iphone++;
    };
    const patchObj = () => {
        user.$patch({
            name: '高考加油 奥利给',
        });
    };

    const pathchFun = () => {
        user.$patch((state) => {
            state.obj.title = '全力以赴 未来很酷';
            state.obj.list.push({ name: '青年节', age: 54 });
            state.obj.person.money = 999999999999;
            state.obj.person.sotck = 1818;
            state.obj.list[1].name = '好多年前的高考了';
            state.obj.list.unshift({ name: '奥德赛之旅', age: 54 });
        });
    };
    const useInside = () => {
      user.interiorChangeFun()
    }
</script>
<template>
    <div>
        <h1>~~~~~~~~~~{{msg}}~~~~~~~~~</h1>
        <p @click="changeIphone">使用方式一: 简单修改 修改userStore 内的iphone +1 看上面数据发生改变了吗</p>
        <p @click="patchObj">使用方式二：$patch 对象式修改 store</p>
        <p @click="pathchFun">使用方式三：$patch 函数式修改 store</p>
        <p @click="useInside">使用方式四: 调用store内actions中定义的方法</p>
    </div>
</template>

<style scoped>
</style>