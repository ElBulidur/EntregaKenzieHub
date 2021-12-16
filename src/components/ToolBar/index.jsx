import { AppBar, Box, Toolbar, Avatar } from "@mui/material";
import LogoKenzie from "../../assets/LogoKenzie";

export default function ToolBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1, background: "#ffffff" }}>
        <Toolbar>
          <LogoKenzie sx={{ color: "black" }} />
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_960_720.jpg"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
