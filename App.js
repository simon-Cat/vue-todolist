import TodoForm from "./TodoForm.js";

export default {
    data() {
        return {
            tempValue: null,
            todos: []
        }
    },
		components: {
			TodoForm
		},
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
			changeHandler(e) {
				this.tempValue = e.target.value;
			},
			saveNewValueHandler(id) {
				this.todo = this.todos.filter((todo) => todo.id === id)[0];

				this.todo.title = this.tempValue;
				this.todo.id = `id-${this.tempValue}-${this.todos.length}`
				this.todo.editable = false;

				this.todo = null;
				this.tempValue = null;

				this.enableButtons();
			},
			cancelSaveHandler(id) {
				this.todo = this.todos.filter((todo) => todo.id === id)[0];

				this.todo.editable = false;

				this.todo = null;
				this.tempValue = null;

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
				console.log('11')
				this.todos.forEach(todo => {
					if(todo.disabled) {
						todo.disabled = false;
					} else {
						return;
					}
				});
			}
		}
};