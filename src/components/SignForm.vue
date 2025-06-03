<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();
const login = ref();
const password = ref();
const success = ref(false);
const errors = ref();
const clickHadler = () => {
    if(login.value == null || password == null){
        errors.value = "Пароль и логин обязательны";
        return;
    }
    errors.value = undefined;
    success.value = true;
    router.push({name: "task"})
}
</script>
<template>
<form class="sign-form" >
    <template v-if="!success">
        <input type="text" placeholder="Логин" v-model="login"/>
        <input type="password" placeholder="Пароль" v-model="password"/>
        <button type="button" @click="clickHadler"></button>
        <div v-if="errors != null" class="error--text">{{ errors }}</div>

    </template>
    <div v-else>
        {{ login }}, Вы, успешно, авторизовались!
    </div>
</form>
</template>
<style>
.sign-form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto
}
.sign-form > button{
    height: 25px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
}
.error--text{
    color: red;
}
</style>