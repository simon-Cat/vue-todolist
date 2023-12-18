const TodoItem = {
    props: ['todo'],
    template: `
    <li class="flex justify-center pb-2 divide-y-2">
    <template v-if="!todo.editable">
        <span class="mr-2 p-3">{{ todo.title }}</span>
        <button class="mr-2 p-3" v-bind:disabled="todo.disabled" type="button">Удалить</button>
        <button class="mr-0 p-2" v-bind:disabled="todo.disabled" type="button">Редактировать</button>
    </template>
    <template v-else>
        <input class="mr-2" type="text" v-model="tempValue">
        <button class="mr-2 p-2" type="button">Сохранить</button>
        <button class="mr-0 p-2" type="button">Отменить</button>
    </template>
</li>
    `
};

export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    template: `
        <ul v-if="todos.length" class="todo-container">
            <todo-item v-for="todo in todos" :key="todo.id" v-bind:todo="todo"></todo-item>
        </ul>
        <div class="text-2xl flex justify-center pt-5 pb-6" v-else="!todos.length">Пока у вас нет ни одной задачи</div> 
    `
};