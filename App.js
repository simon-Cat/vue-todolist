// import TodoForm from "./components/TodoForm.js";
// import TodoList from "./components/TodoList.js";

export default {
    data() {
        return {
			// todo: null,
            // tempValue: null,
            todos: []
        }
    },
	template: `
	<nav>
		<ul class="flex justify-center gap-x-4 px-4">
			<router-link to="/">App</router-link>
			<router-link to="/current">Current</router-link>
		</ul>
	</nav>
	<router-view v-slot="{ Component }">
		<component
		:is="Component"
		:todos="todos"
		:isTodosHaveEditable="isTodosHaveEditable"
		@submit-form="submitHandler"
		@remove-item="removeTodoHandler"
		@edit-item="editTodoHandler"
		@save-changes="saveNewValueHandler"
		@cancel-changes="cancelChangesHandler"
	/>
	</router-view>
	`,
		computed: {
			isTodosHaveEditable() {
				return this.todos.some(todo => todo.editable === true);
			}
		},
		methods: {
			submitHandler(todo) {
				if(!todo) {
					return;
				}
				this.todos.push({
					id: `id-${todo}-${this.todos.length}`,
					title: todo,
					editable: false,
					disabled: false
				});
			},
			removeTodoHandler(id) {
				this.todos = this.todos.filter((todo) => todo.id !== id);
			},
			editTodoHandler(id) {
				this.todo = this.todos.filter((todo) => todo.id === id)[0];
				this.todo.editable = true;
				this.tempValue = this.todo.title;
				this.todo = null;

				this.disableButtons();
			},
			saveNewValueHandler(id, newValue) {
				this.todo = this.todos.filter((todo) => todo.id === id)[0];
				this.todo.title = newValue;
				this.todo.id = `id-${newValue}-${this.todos.length}`
				this.todo.editable = false;

				this.todo = null;

				this.enableButtons();
			},
			cancelChangesHandler(id) {
				this.todo = this.todos.filter((todo) => todo.id === id)[0];

				this.todo.editable = false;

				this.todo = null;

				this.enableButtons();
			},
			disableButtons() {
				this.todos.forEach(todo => {
					if(!todo.editable) {
						todo.disabled = true;
					} else {
						return;
					}
					
				});
			},
			enableButtons() {
				this.todos.forEach(todo => {
					if(todo.disabled) {
						todo.disabled = false;
					} else {
						return;
					}
				});
			},
			goHome() {
				console.log($router);
				this.$router.push('/home');
			}
		}
};