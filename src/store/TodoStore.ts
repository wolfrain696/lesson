import { makeAutoObservable } from "mobx";
import { ITodoCard } from "../types/todo";
class TodoStore {
  todoList: ITodoCard[] = [];
  inputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = () => {
    const newTodo: ITodoCard = { id: Date.now(), title: this.inputValue };
    this.todoList.unshift(newTodo);
  };

  changeInputValue = (value: string) => {
    this.inputValue = value;
  };
}

export default new TodoStore();
