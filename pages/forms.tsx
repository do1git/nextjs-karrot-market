import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  pwd: string;
  email: string;
}

export default function Forms() {
  const onValid = (data: LoginForm) => {
    console.log("onValiiiid");
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {},
    mode: "all",
  });
  console.log(register("email"));
  console.log(errors);
  // setValue()
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is reqqq@@@",
          minLength: { message: "more chracter needed", value: 5 },
        })}
        type="text"
        placeholder="username"
      />
      <br />
      <input
        {...register("email", {
          required: "email is reqqq@@@",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="text"
        placeholder="email"
      />
      <br />
      <input
        {...register("pwd", { required: "pwd is reqqq@@@" })}
        type="text"
        placeholder="pwd"
      />
      <br />
      <input type="submit" />
    </form>
  );
}
