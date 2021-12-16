import { Stack, Box, Chip } from "@mui/material";
import { theme } from "../styles/ThemeDefault";
export default function LogoKenzie() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Box
        component="p"
        sx={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: "24px",
        }}
      >
        {"Kenzie "}
        <Chip
          sx={{
            color: "white",
            borderRadius: "7px",
            fontSize: "24px",
            background: theme.palette.colorPrimary.bg,
          }}
          label="Hub"
        />
      </Box>
    </Stack>
  );
}
