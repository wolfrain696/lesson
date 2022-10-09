import React, { ChangeEvent, KeyboardEventHandler } from "react";
import { CustomInput } from "../../components/CustomInput";
import TodoCard from "../../components/TodoCard";
import TodoStore from "../../store/TodoStore";
import { observer } from "mobx-react-lite";
import { StyledMainContainer, StyledListWrapper } from "./styled";

const TodoList = () => {
  const { inputValue, todoList, addTodo, changeInputValue } = TodoStore;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(event.target.value);
  };

  const handleKeyUpAddTodo: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!inputValue.trim()) return;
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <StyledMainContainer maxWidth="lg">
      <CustomInput
        onKeyUp={handleKeyUpAddTodo}
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="New Task"
        label="Enter task"
      />
      <StyledListWrapper>
        {todoList.map((todo) => (
          <TodoCard title={todo.title} id={todo.id} key={todo.id} />
        ))}
      </StyledListWrapper>
    </StyledMainContainer>
  );
};

export default observer(TodoList);
