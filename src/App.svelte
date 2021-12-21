<script>
	import TodoList from "./components/TodoList.svelte";
	import TodoHeader from "./components/TodoHeader.svelte";
	import TodoFooter from "./components/TodoFooter.svelte";

</script>

<main>
	<TodoHeader />
	<TodoList />
	<TodoFooter />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
