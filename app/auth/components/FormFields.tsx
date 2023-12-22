"use client";
import { InputAdornment, Stack, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type TformField = {
  value: string;
  name: string;
  title: string;
  type: string;
  change: (e: any) => void;
  placeholder?: string;
};

const FormField: React.FC<TformField> = ({
  value,
  name,
  title,
  change,
  type,
  placeholder,
}) => {
  const [types, settypes] = useState<string>(type);
  return (
    <Stack spacing={2}>
      <p style={{ color: "white", fontSize: "1.4rem" }}>{title}</p>
      {type == "password" && (
        <TextField
          name={name}
          value={value}
          sx={{ bgcolor: "white", borderRadius: "4px" }}
          fullWidth
          onChange={(e) => change(e)}
          type={types}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {types == "password" ? (
                  <Visibility
                    sx={{ cursor: "pointer" }}
                    onClick={() => settypes("text")}
                  />
                ) : (
                  <VisibilityOff
                    sx={{ cursor: "pointer" }}
                    onClick={() => settypes("password")}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
      )}

      {type == "mobile" && (
        <PhoneInput value={value} onChange={change} defaultCountry="NG" />
      )}

      {type != "password" && type != "mobile" && (
        <TextField
          name={name}
          value={value}
          sx={{ bgcolor: "white", borderRadius: "4px" }}
          fullWidth
          onChange={(e) => change(e)}
          type={type}
          placeholder={placeholder}
        />
      )}
    </Stack>
  );
};

export default FormField;
