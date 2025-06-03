<script setup>
import {ElInput} from 'element-plus';
import {ElCheckbox} from 'element-plus';
import {ElButton} from 'element-plus';
import { reactive } from 'vue';
const task = reactive({
    status: false,
    title: "",
});

const clickHandler = () => {
    const uri = new URL('task', 'https://da11os.pythonanywhere.com')
    fetch(uri, {
        method: "POST",
        body: JSON.stringify(task),
        headers: [
            ["accept", "application/json"],
            ["content-type", "application/json"]
        ]
    })
}

</script>

<template>
<el-input placeholder="Название" v-model="task.title"></el-input>
<el-checkbox lable="Выполнен"v-model="task.status"></el-checkbox>
<el-button type="primary" @click="clickHandler">Сохранить</el-button>
</template>