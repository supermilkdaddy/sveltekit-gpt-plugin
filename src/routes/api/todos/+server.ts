import { todosStore } from "$lib/stores/todos-store";
import { get } from "svelte/store";
import { json } from "@sveltejs/kit";
import type { TodosStoreObject } from "$lib/stores/todos-store";

export async function GET() {

  return json(
    {
      todos: (get(todosStore) as TodosStoreObject).todos,
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://chat.openai.com',
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
      },
    }
  )

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

