export default {
    props: ['isDisabled'],
    emits: ['submit-form'],
    data() {
        return {
            todo: null
        }
    },
    template: `
        <section>
            <h2 class="mt-60 text-4xl flex justify-center pt-5 pb-6">Добавить новую задачу</h2>    
            <form @submit.prevent="sibmitHandler(todo)">
                <div class="flex justify-center mb-5">
                    <input v-bind:disabled="isDisabled" v-model="todo" class="text-2xl p-2 outline-0 outline-none mr-5 border-2 border-black rounded" id="name" type="text">
                    <button v-bind:disabled="isDisabled" type="submit" class="transition-all hover:bg-blue-600 hover:text-white text-xl p-2 border-2 border-blue-600 rounded">Добавить</button>
                </div>
            </form>
        </section>`,
    methods: {
        sibmitHandler(todo) {
            this.$emit('submit-form', this.todo);
            this.todo = null;
        }
    }
};