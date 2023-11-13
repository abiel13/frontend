import { Stack, TextField } from "@mui/material";
import React from "react";

type TformField = {
  value: string;
  name: string;
  title: string;
  type?:string;
  change: (e:any) => void;
};

const FormField: React.FC<TformField> = ({ value, name, title, change }) => {
  return (
    <Stack spacing={2}>
      <p style={{ color: "white", fontSize: "1.4rem" }}>{title}</p>
      <TextField
        name={name}
        value={value}
        sx={{ bgcolor: "white", borderRadius: "4px" }}
        fullWidth
        onChange={(e) => change(e)}
      />
    </Stack>
  );
};

export default FormField;
