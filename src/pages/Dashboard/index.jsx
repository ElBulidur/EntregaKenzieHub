import CardBlue from "../../components/Cards/CardBlue";
import CardGreen from "../../components/Cards/CardGreen";
import ToolBar from "../../components/ToolBar";
import CardProfile from "../../components/Cards/CardProfile";

import { useHistory } from "react-router-dom";

import { Grid, Stack } from "@mui/material";

import { useState, useEffect } from "react";

import api from "../../services/api";

export default function DashBoard() {
  const token = JSON.parse(sessionStorage.getItem("authToken"));
  const history = useHistory();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      api
        .get(`/profile`, {
          headers: { Authorization: `Bearer: ${token}` },
        })
        .then((response) => {
          setProfile(response.data);
        });
    }
  }, []);

  return (
    <Stack
      sx={{
        maxWidth: "90vw",
        margin: "0px auto",
      }}
    >
      <Grid container>
        <Grid container xs={12} sx={{ marginBottom: "10px" }}>
          <ToolBar />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-Start"
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <CardGreen techs={profile.techs} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardBlue works={profile.works} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardProfile profile={profile} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
