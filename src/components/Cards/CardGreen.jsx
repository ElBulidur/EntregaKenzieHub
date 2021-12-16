import { TechIcon } from "../../assets/IconsSVG";

import HandleModal from "../../components/HandleModal";
import CreateTech from "../FormTech/CreateTech";

import { useState } from "react";

import {
  Divider,
  Stack,
  Card,
  Modal,
  CardContent,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CardGreen = ({ techs }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const updateTech = (id, title, status) => {
    setId(id);
    setTitle(title);
    setStatus(status);
    setOpenModal(true);
  };

  const modalUpdate = (
    <Modal
      keepMounted
      open={openModal}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <CreateTech id={id} title={title} status={status} />
      </Box>
    </Modal>
  );
  return (
    <Stack
      direction="column"
      sx={{
        border: "2px solid #f5f5f5",
        borderRadius: "5px",
        background: "#ffffff",
        flex: "nowrap",
      }}
    >
      <Toolbar>
        <h3>Minhas Tecnologias</h3>
        <Box sx={{ flexGrow: 1 }} />
        <HandleModal color="#11995E">
          <CreateTech />
        </HandleModal>
        {modalUpdate}
      </Toolbar>
      {techs ? (
        techs.map((tech) => (
          <Card
            key={tech.id}
            sx={{
              display: "flex",
              margin: "2px",
              cursor: "pointer",
              ":hover": {
                background: "#e6f5f5",
              },
            }}
            onClick={() => updateTech(tech.id, tech.title, tech.status)}
          >
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "25%",
                height: "90px",
                background: "#e6f5f5",
                margin: "auto 0px",
                borderRadius: "5px",
              }}
            >
              <TechIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  stroke: "#3f3cab",
                  color: "transparent",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "73%",
                height: "90px",
              }}
            >
              <CardContent sx={{ flex: "auto 0 auto", padding: "7px" }}>
                <Typography component="span" variant="h5">
                  {tech.title}
                </Typography>
                <Box
                  sx={{
                    background: "#E7F5EF",
                    color: "#11995E",
                    borderRadius: "10px",
                    width: "100px",
                    padding: "2px",
                    textAlign: "center",
                  }}
                >
                  {tech.status}
                </Box>
              </CardContent>
            </Box>
            <Box sx={{ width: "2%" }}>
              <Divider
                sx={{
                  background: "#e6f5f5",
                  borderRadius: "2px",
                }}
                orientation="vertical"
              />
            </Box>
          </Card>
        ))
      ) : (
        <Typography sx={{ fontSize: "18px" }} component="span" variant="h5">
          Sem trabalhos cadastrados
        </Typography>
      )}
    </Stack>
  );
};
export default CardGreen;
