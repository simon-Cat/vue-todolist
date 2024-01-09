
export default {
    emits: ['set-undone'],
    props: ['finishedTodos'],
    template: `
        <section>
            <h2 class="text-center">Finished todos</h2>
            <ul>
                <li class="flex justify-center pb-2 divide-y-2" v-for="finishedTodo in finishedTodos" :key="finishedTodo.id">
                    <span class="mr-2 p-3">{{ finishedTodo.title }}</span>
                    <button class="mr-0 p-2" @click="$emit('set-undone', finishedTodo.id)" type="button">Пометить как невыполненное</button>
                </li>
            </ul>
        </section>
    `
};