<script>
    import TodoItem from "./TodoItem.svelte";
    import { todos, viewMode } from "../store";
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";
</script>

<div class="main">
    <ul>
        {#each $todos as todo, index (todo.id)}
            <li
                in:fade={{ duration: 100 }}
                out:fade={{ duration: 100 }}
                animate:flip={{ duration: 1000 }}
            >
                <TodoItem {todo} />
            </li>
        {/each}
    </ul>
</div>

<style>
    li {
        list-style-type: none;
    }
</style>
