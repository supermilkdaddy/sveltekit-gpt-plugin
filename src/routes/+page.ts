import type { PageLoad } from './$types';


export const load = (async (event) => {

  async function handleGetTodos() {
    const response = await event.fetch('/api/todos', {
      headers: {
        'Content-Type': 'Application/JSON'
      }
    });

    const todosData = await response.json();
    console.log('PageLoad::todosData:', todosData); // {todos: []}
    return todosData.todos;
  }

  return {
    todos: handleGetTodos()
  };
}) satisfies PageLoad;

