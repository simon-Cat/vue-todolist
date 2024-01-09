export default {
    props: ['todosCount'],
    template: `
        <span 
            class="block w-9 text-sm py-2 px-2 bg-red-800 rounded-md text-center text-white absolute top-[-30px] left-[90%]">
                {{ todosCount > 99 ? "99+" : todosCount}}
        </span>
    `
};