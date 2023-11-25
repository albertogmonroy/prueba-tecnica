import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {  DateTimePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import { PropsInterface } from "../../interface/ui/uiInterface";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";

export const FormCalendar = ({
  name,
  label,
  rules,
  ...props
}: PropsInterface) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <DateTimePicker
            format="dd/MM/yyyy HH:mm"
            label={label}            
            {...props}
            timezone="Mexico/General"
            value={value || null}
            /* eslint-disable */
            onChange={(date: any) => onChange(date)}
            sx={{
              width: "100%",
              border:
                rules?.required && !value && formState.isSubmitted
                  ? "#f44336 1px solid"
                  : "",
            }}
          />
          {rules?.required && !value && formState.isSubmitted ? (
            <p style={{ color: "#f44336", fontSize: "12px" }}>
              {rules?.required?.message}{" "}
            </p>
          ) : null}
        </LocalizationProvider>
      )}
      rules={rules}
    />
  );
};
