import {
  Typography,
  Button,
  CardHeader,
  CardContent,
  Avatar,
  Box,
  Stack,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { useHistory } from "react-router-dom";

export default function CardProfile({ profile }) {
  const history = useHistory();
  const logout = () => {
    sessionStorage.clear();
    history.push("/");
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      sx={{
        minWidth: "100%",
        borderRadius: "10px",
        background: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <CardHeader
        sx={{ background: "#403CAA" }}
        avatar={
          <Avatar
            sx={{ width: "70px", height: "70px" }}
            aria-label="recipe"
            src={
              profile.avatar_url
                ? profile.avatar_url
                : "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_960_720.jpg"
            }
          >
            R
          </Avatar>
        }
        title={
          <Typography variant="h6" color="white">
            {profile.name}
          </Typography>
        }
        subheader={
          <Typography variant="span" color="white">
            {profile.course_module}
          </Typography>
        }
      />
      <Stack sx={{ padding: "10px" }}>
        <CardContent
          sx={{
            height: "30px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            background: "#ececf7",
          }}
        >
          <Box
            sx={{
              background: "#403CAA",
              minWidth: "50px",
              borderRadius: "5px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <PhoneIphoneIcon />
          </Box>
          <Box
            sx={{
              display: "block",
              margin: "0px 0px 0px 10px",
              height: "45px",
            }}
          >
            <strong>Contato</strong>
            <br />
            {profile.contact}
          </Box>
        </CardContent>
        <CardContent
          sx={{
            height: "30px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            margin: "15px 0px 0px 0px",
            background: "#e6f5ee",
          }}
        >
          <Box
            sx={{
              background: "#11995E",
              minWidth: "50px",
              borderRadius: "5px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <MailOutlineIcon />
          </Box>

          <Box
            sx={{
              display: "block",
              margin: "0px 0px 0px 10px",
              height: "45px",
              maxWidth: "180px",
            }}
          >
            <strong>Enviar email</strong>
            <br />
            {profile.email}
          </Box>
        </CardContent>
        <Button
          sx={{ marginTop: "10px" }}
          type="submit"
          variant="contained"
          onClick={logout}
        >
          Sair
        </Button>
      </Stack>
    </Stack>
  );
}
