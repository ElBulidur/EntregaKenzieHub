import { useEffect } from "react";

import FormSignIn from "../../components/FormSignIn";

import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";

export default function Home() {
  const authentication = sessionStorage.getItem("authToken");
  const history = useHistory();

  useEffect(() => {
    if (authentication) {
      history.push("/dashboard");
    }
  });

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid item xs={12}>
          <FormSignIn />
        </Grid>
      </Grid>
    </>
  );
}
