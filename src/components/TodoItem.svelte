<script>
    import { writable } from "svelte/store";
    import { editTarget, storeActions } from "../store";

    export let todo;

    const comment = writable(todo.comment);

    const toggleTodo = () => storeActions.toggleTodo(todo.id);
    const deleteTodo = () => storeActions.deleteTodo(todo.id);
    const enterEditMode = () => storeActions.enterEditMode(todo.id);

    const editTodo = () => {
        storeActions.editTodo(todo.id, $comment);
        $editTarget = -1;
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            editTodo();
        }
    };

    const cancelEditing = () => {
        $comment = todo.comment;
        $editTarget = -1;
    };

    editTarget.subscribe(() => ($comment = todo.comment));
</script>

{#if $editTarget === todo.id}
    <input type="text" bind:value={$comment} on:keyup={handleKeyUp} />
    <button on:click={editTodo}>수정</button>
    <button on:click={cancelEditing}>취소</button>
{:else}
    <input type="checkbox" bind:checked={todo.done} on:click={toggleTodo} />
    <span>{todo.comment}</span>
    <button on:click={enterEditMode}>편집</button>
    <button on:click={deleteTodo}>삭제</button>
{/if}

<style>
    button {
        border: none;
        color: aliceblue;
        background: #ffae3e;
    }
</style>
