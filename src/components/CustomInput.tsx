import { TextField, TextFieldProps, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { FC } from "react";

const StyledCustomInput = styled(TextField)`
  width: 100%;
`;

export const CustomInput: FC<TextFieldProps> = (props) => (
  <Paper elevation={8}>
    <StyledCustomInput {...props} />
  </Paper>
);
