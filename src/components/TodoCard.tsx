import React, { FC } from "react";
import { Card, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodoCard } from "../types/todo";

const StyledTodoCard = styled(Card)`
  max-width: 49%;
  min-width: 150px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  padding: 16px;
`;

interface ITodoCardProps extends ITodoCard {}

const TodoCard: FC<ITodoCardProps> = ({ id, title }) => {
  return (
    <StyledTodoCard variant="outlined">
      <Typography variant="subtitle1">{title}</Typography>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </StyledTodoCard>
  );
};

export default TodoCard;
