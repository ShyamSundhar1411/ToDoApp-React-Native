import { faker } from "@faker-js/faker";
function generateRandomToDoItems(numberOfItems) {
  const todos = [];
  for (let i = 0; i < numberOfItems; i++) {
    const todoItem = {
      id: i + 1,
      title: faker.lorem.words(),
      completed: false,
      createdAt: faker.date.past().toISOString(),
      isImportant: false,
    };
    todos.push(todoItem);
  }
  return todos;
}

const numberOfItems = 10;
export const todoItems = generateRandomToDoItems(numberOfItems);
