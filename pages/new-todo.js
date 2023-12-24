import TodoForm from '../components/TodoForm.js';
// import TodoList from '../components/TodoList.js';

export default {
    emits: ['submit-form'],
    props: ['todos', 'isTodosHaveEditable'],
    data() {
        return {
			todo: null,
            tempValue: null,
            // todos: []
        }
    },
    components: {
        TodoForm,
        // TodoList
    },
    // computed: {
    //     isTodosHaveEditable() {
    //         return this.todos.some(todo => todo.editable === true);
    //     }
    // },
    methods: {
        submitHandler(todo) {
            this.$emit('submit-form', todo);
        },
        // submitHandler(todo) {
        //     if(!todo) {
        //         return;
        //     }
        //     this.todos.push({
        //         id: `id-${todo}-${this.todos.length}`,
        //         title: todo,
        //         editable: false,
        //         disabled: false
        //     });
        // },
        // removeTodoHandler(id) {
        //     this.todos = this.todos.filter((todo) => todo.id !== id);
        // },
        // editTodoHandler(id) {
        //     this.todo = this.todos.filter((todo) => todo.id === id)[0];
        //     this.todo.editable = true;
        //     this.tempValue = this.todo.title;
        //     this.todo = null;

        //     this.disableButtons();
        // },
        // saveNewValueHandler(id, newValue) {
        //     this.todo = this.todos.filter((todo) => todo.id === id)[0];
        //     this.todo.title = newValue;
        //     this.todo.id = `id-${newValue}-${this.todos.length}`
        //     this.todo.editable = false;

        //     this.todo = null;

        //     this.enableButtons();
        // },
        // cancelChangesHandler(id) {
        //     this.todo = this.todos.filter((todo) => todo.id === id)[0];

        //     this.todo.editable = false;

        //     this.todo = null;

        //     this.enableButtons();
        // },
        // disableButtons() {
        //     this.todos.forEach(todo => {
        //         if(!todo.editable) {
        //             todo.disabled = true;
        //         } else {
        //             return;
        //         }
                
        //     });
        // },
        // enableButtons() {
        //     this.todos.forEach(todo => {
        //         if(todo.disabled) {
        //             todo.disabled = false;
        //         } else {
        //             return;
        //         }
        //     });
        // }
    },
    template: `
    <todo-form 
        v-bind:is-disabled="isTodosHaveEditable" 
        @submit-form="submitHandler">
    </todo-form>
    `
}