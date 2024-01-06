import CountLable from "./components/CountLable.js";

export default {
    data() {
        return {
            todos: []
		}
    },
	template: `
	<nav class="bg-teal-700">
		<ul class="flex justify-center gap-x-10 px-4 py-10 text-lg">
			<li>
				<router-link to="/"
					class="transition-all bg-teal-600 text-white hover:bg-teal-100 hover:text-teal-600 p-3 rounded shadow-xl">
						Create new todo</router-link>
			</li>
			<li class="relative">
				<count-lable v-bind:todosCount="todos.length"></count-lable>
				<router-link to="/current" class="transition-all bg-teal-600 text-white hover:bg-white hover:text-teal-600 p-3 rounded P">Current todos</router-link>
			</li>
			<li class="relative">
				<count-lable v-bind:todosCount="finishedTodos.length"></count-lable>
				<router-link to="/finished" class="transition-all bg-teal-600 text-white hover:bg-white hover:text-teal-600 p-3 rounded shadow-xl">Finished todos</router-link>	
			</li>
		</ul>
	</nav>
	<router-view v-slot="{ Component }">
		<transition>
			<component
				:is="Component"
				:todos="todos"
				:isTodosHaveEditable="isTodosHaveEditable"
				:finishedTodos="finishedTodos"
				@submit-form="submitHandler"
				@remove-item="removeTodoHandler"
				@edit-item="editTodoHandler"
				@save-changes="saveNewValueHandler"
				@cancel-changes="cancelChangesHandler"
				@set-done="setDoneTodo"
				@set-undone="setUndoneTodo"
			/>
		</transition>
	</router-view>
	`,
		computed: {
			isTodosHaveEditable() {
				return this.todos.some(todo => todo.editable === true);
			},
			finishedTodos() {
				return this.todos.filter(todo => todo.isDone === true);
			}
		},
		components: {
			CountLable
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
					disabled: false,
					isDone: false
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
			setDoneTodo(id) {
				this.todos = this.todos.map(todo => {
					if(todo.id === id) {
						todo.isDone = true;
						return todo;
					}
					return todo;
				});
			}, 
			setUndoneTodo(id) {
				this.todos = this.todos.map(todo => {
					if(todo.id === id) {
						todo.isDone = false;
						return todo;
					}
					return todo;
				})
			}
		}
};