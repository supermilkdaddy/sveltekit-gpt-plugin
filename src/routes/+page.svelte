<script lang="ts">
	import type { PageData } from './$types';
	import { todosStore, type Todo } from '$lib/stores/todos-store';

	export let data: PageData;
	console.log('PageData:', data);

	async function handleAddTodo(todo: Todo) {
		// Make a POST request to my api/add-todo route
		const response = await fetch('/api/add-todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON'
			},
			body: JSON.stringify(todo)
		});
	}

	$: loadedTodos = data.todos;
	$: console.log($todosStore.todos);
</script>

<h1>SvelteKit TODO List</h1>
<h3>todosStore:</h3>
{#each $todosStore.todos as todo}
	<p>{todo.todo}</p>
{/each}

<h3>PageData:</h3>
{#each loadedTodos as loadedTodo}
	<p>{loadedTodo.todo}</p>
{/each}

<!-- <button on:click={() => handleGetTodos()}>Get</button> -->
<button on:click={() => todosStore.addTodo({ todo: 'added from client' })}>Add</button>
<button on:click={() => handleAddTodo({ todo: 'added with fetch AGAIN' })}>Add w/ Fetch</button>
