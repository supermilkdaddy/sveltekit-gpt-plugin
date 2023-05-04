import { writable } from 'svelte/store';

export type Todo = {
  [key: string]: string
}

export type TodosStoreObject = {
  todos: Todo[],
}

function createTodosStore() {
  const { subscribe, set, update } = writable<TodosStoreObject>({ todos: [] })

  return {
    subscribe,
    set,
    update,
    addTodo: (todo: Todo) => {
      update((self: TodosStoreObject) => {
        self.todos = [...self.todos, todo]
        return self
      });
    },
    deleteTodo: (todo: Todo) => {
      update((self: TodosStoreObject) => {
        const index = self.todos.findIndex((t) => t.todo === todo.todo);
        self.todos.splice(index, 1);
        return self;
      })
    },
    reset: () => set({ todos: [] })
  }
}

export const todosStore = createTodosStore();


// interface Todo {
//   [key: string]: string
// }

// type TodosType = Todo[]

// export const todosStore = writable<TodosType>([]);
// class TodosClass {
//   todos: TodosType = [];

//   addTodo(todo: Todo): void {
//     this.todos = [...this.todos, todo];
//   }

//   getTodos(): TodosType {
//     return this.todos;
//   }

//   deleteTodo(todo: Todo): void {
//     const index = this.todos.findIndex((item) => item.todo === todo.todo);
//     this.todos.splice(index, 1);
//   }

// }

// Create singleton
// const Todos = new TodosClass();

// export { Todos };
