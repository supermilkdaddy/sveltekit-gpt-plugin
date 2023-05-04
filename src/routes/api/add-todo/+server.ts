import { todosStore, type Todo } from "$lib/stores/todos-store";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function POST(event: RequestEvent) {
  const body = await event.request.json() as Todo;
  console.log("add-todo::req.json(): ", body);
  todosStore.addTodo(body);

  return json(
    {
      success: true
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://chat.openai.com',
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
      }
    }
  );
}

export async function OPTIONS() {
  return json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://chat.openai.com',
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
      },
    }
  );
}


