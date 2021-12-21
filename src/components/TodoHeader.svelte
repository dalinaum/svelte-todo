<script>
    import { writable } from "svelte/store";
    import { storeActions } from "../store";

    let inputForm;

    const headerComment = writable("");

    const addTodo = () => {
        const comment = $headerComment
        if (comment === "") {
            return
        }
        storeActions.addTodo(comment);
        inputForm.value = "";
        $headerComment = "";
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            addTodo();
        }
    };
</script>

<header>
    <h1>Svelte ToDo</h1>
    <input
        type="text"
        bind:this={inputForm}
        bind:value={$headerComment}
        on:keyup={handleKeyUp}
    />
    <button on:click={addTodo}>추가</button>
</header>

<style>
    h1 {
        color: #ff3e00;
        font-size: 4em;
        font-weight: 100;
    }
</style>
