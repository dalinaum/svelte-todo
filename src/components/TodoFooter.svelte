<script>
import { writable } from "svelte/store";

    import { storeActions } from "../store";

    const displayAll = () => storeActions.updateViewMode(0)
    const displayWIP = () => storeActions.updateViewMode(1)
    const displayDone = () => storeActions.updateViewMode(2)
</script>

<footer>
    <button on:click={displayAll}>전체</button>
    <button on:click={displayWIP}>작업중</button>
    <button on:click={displayDone}>완료</button>
</footer>

