const TodoItem = {
    props: ['todo', 'mode'],
    emits: ['remove-item', 'edit-item', 'save-changes', 'cancel-changes', 'set-done'],
    data() {
        return {
            newValue: this.todo.title
        }
    },
    template: `
    <li :class="[mode === 'cards' ? 'todo-item_mode_cards' : 'todo-item_mode_list', 'todo-item']">
        <template v-if="!todo.editable">
            <span class="mr-2 p-3">{{ todo.title }}</span>
            <div>
                <button class="mr-2 p-3" v-bind:disabled="todo.disabled" @click="$emit('remove-item', todo.id)" type="button">Удалить</button>
                <button class="mr-0 p-2" v-bind:disabled="todo.disabled" @click="$emit('edit-item', todo.id)" type="button">Редактировать</button>
                <button class="mr-0 p-2" v-bind:disabled="todo.disabled" @click="$emit('set-done', todo.id)" type="button">Пометить как выполненное</button>
            </div>
        </template>
        <template v-else>
            <input class="mr-2" type="text" v-model="newValue">
            <button class="mr-2 p-2" @click="$emit('save-changes', todo.id, newValue)" type="button">Сохранить</button>
            <button class="mr-0 p-2" @click="$emit('cancel-changes', todo.id)" type="button">Отменить</button>
        </template>
    </li>
    `
};

export default {
    props: ['todos'],
    emits: ['remove-item', 'edit-item', 'save-changes', 'cancel-changes', 'set-done'],
    components: {
        TodoItem
    },
    data() {
        return {
            mode: 'list'
        };
    },
    methods: {
        removeItem(id) {
            this.$emit('remove-item', id);
        },
        editItem(id) {
            this.$emit('edit-item', id);
        },
        saveItemChanges(id, newValue) {
            this.$emit('save-changes', id, newValue);
        },
        cancelItemChanges(id) {
            this.$emit('cancel-changes', id);
        },
        setDoneHandler(id) {
            this.$emit('set-done', id);
        }
    },
    methods: {
        changeListViewMode() {
            if(this.mode === 'list') {
                this.mode = 'cards';
            } else {
                this.mode = 'list';
            }
        }
    },
    template: `
        <template v-if="todos.length">
            <button v-on:click="changeListViewMode">Change mode</button>
            <ul class="todo-list" :class="[mode === 'cards' ? 'todo-list_mode_cards' : 'todo-list_mode_list']">
                <todo-item 
                    v-for="todo in todos" 
                    :key="todo.id" 
                    v-bind:todo="todo"
                    v-bind:mode="mode" 
                    @remove-item="removeItem" 
                    @edit-item="editItem"
                    @save-changes="saveItemChanges"
                    @cancel-changes="cancelItemChanges"
                    @set-done="setDoneHandler">
                </todo-item>
            </ul>
        </template>

        <div class="text-2xl flex justify-center pt-5 pb-6" v-else>Пока у вас нет ни одной задачи</div> 
    `
};