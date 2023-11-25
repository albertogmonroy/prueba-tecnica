import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { PropsInterface } from "../../interface/ui/uiInterface";

export const FormInputText = ({
  name,
  label,
  rules,
  ...props
}: PropsInterface) => {
  const { control, formState, register } = useFormContext();
  const errors = formState?.errors[name]
    ? formState.errors[name]?.message?.toString()
    : "";
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          {...register(name)}
          onChange={onChange}
          value={value || ""}
          error={formState.errors[name] ? true : false}
          helperText={errors}
          {...props}
        />
      )}
      rules={rules}
    />
  );
};
