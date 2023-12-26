export default {
    props: ['todosCount'],
    template: `
        <span class="block w-6 text-[10px] p-1 bg-red-800 rounded-full text-center text-white absolute top-[-10px] left-[48px]">{{ todosCount > 99 ? "99+" : todosCount}}<span>
    `
};