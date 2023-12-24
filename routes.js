import NewTodo from "./pages/new-todo.js";
import CurrentTodos from "./pages/current-todos.js";

export const routes = [
    {
        path: '/',
        component: NewTodo,
    },
    {
        path: '/current',
        component: CurrentTodos,
    }

];