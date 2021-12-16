import { useEffect } from "react";

import FormSignUp from "../../components/FormSignUp";

import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";

export default function SignUp() {
  const authentication = sessionStorage.getItem("authToken");
  const history = useHistory();

  useEffect(() => {
    if (authentication) {
      history.push("/dashboard");
    }
  });

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <FormSignUp />
      </Grid>
    </Grid>
  );
}
