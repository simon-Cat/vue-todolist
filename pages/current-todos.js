import TodoList from "../components/TodoList.js";

export default {
    emits: ['remove-item', 'edit-item', 'save-changes', 'cancel-changes', 'set-done'],
    props: ['todos'],
    components: {
        TodoList
    },
    methods: {
        removeHandler(id) {
            this.$emit('remove-item', id);
        },
        editHandler(id) {
            this.$emit('edit-item', id);
        },
        saveHandler(id, newValue) {
            this.$emit('save-changes', id, newValue);
        }, 
        cancelHandler(id) {
            this.$emit('cancel-item', id);
        },
        setDoneHandler(id) {
            this.$emit('set-done', id)
        }
    },
    template: `
    <todo-list
		v-bind:todos="todos"
		@remove-item="removeHandler"
		@edit-item="editHandler"
		@save-changes="saveHandler"
		@cancel-changes="cancelHandler"
        @set-done="setDoneHandler">
	</todo-list>
    `
};