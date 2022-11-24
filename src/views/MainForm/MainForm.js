import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const MainForm = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/data", {
      state: data,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Name"
            variant="outlined"
            value={value}
            onChange={onChange}
            helperText={error ? error.message : null}
            error={!!error}
          />
        )}
      />
      <Controller
        name="phone"
        defaultValue=""
        control={control}
        rules={{ required: "Phone number is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Phone"
            variant="outlined"
            value={value}
            onChange={onChange}
            type="number"
            helperText={error ? error.message : null}
            error={!!error}
          />
        )}
      />
      <Controller
        name="mail"
        defaultValue=""
        control={control}
        rules={{
          required: "Email number is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="outlined"
            value={value}
            onChange={onChange}
            helperText={error ? error.message : null}
            error={!!error}
          />
        )}
      />
      <Button variant="contained" type="submit" className="mb-3">
        Play
      </Button>
    </form>
  );
};

export default MainForm;
