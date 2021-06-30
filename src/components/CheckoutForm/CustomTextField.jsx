import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext,Controller } from "react-hook-form";

const CustomTextField = ({name, label,required}) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
        <Controller
                control={control}
                name={name}
                render = {({ field})=> (
                    <TextField
                        fullWidth
                        label={label}
                        required
                    />
                )}
            />
      {/* <Controyaller as={TextField} control={control} fullWidth name={name} label={label} required={required} /> */}
    </Grid>
  );
};

export default CustomTextField;
