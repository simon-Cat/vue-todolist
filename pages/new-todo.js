import TodoForm from '../components/TodoForm.js';

export default {
    emits: ['submit-form'],
    props: ['todos', 'isTodosHaveEditable'],
    data() {
        return {
			todo: null,
            tempValue: null,
        }
    },
    components: {
        TodoForm,
    },
    methods: {
        submitHandler(todo) {
            this.$emit('submit-form', todo);
        },
    },
    template: `
    <todo-form 
        v-bind:is-disabled="isTodosHaveEditable" 
        @submit-form="submitHandler">
    </todo-form>
    `
}