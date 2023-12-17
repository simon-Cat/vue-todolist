export default {
    emits: ['submit-form'],
    data() {
        return {
            todo: null
        }
    },
    template: `<form @submit.prevent="sibmitHandler(todo)">
        <label for="name" class="text-4xl flex justify-center pt-5 pb-6">Добавить задачу</label>
        <br>
        <div class="flex justify-center mb-5">
            <input v-model="todo" class="mr-5 border-2 border-black rounded" id="name" type="text">
            <button type="submit">Добавить</button>
        </div>
    </form>`,
    methods: {
        sibmitHandler(todo) {
            this.$emit('submit-form', this.todo);
            this.todo = null;
        }
    }
};