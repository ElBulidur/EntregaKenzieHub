import { WorkIcon } from "../../assets/IconsSVG";

import HandleModal from "../../components/HandleModal";
import CreateWork from "../FormWork/CreateWork";

import { useState } from "react";

import {
  Divider,
  Stack,
  Card,
  Modal,
  Box,
  Typography,
  CardContent,
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

const CardBlue = ({ works }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateWork = (id, title, description) => {
    setId(id);
    setTitle(title);
    setDescription(description);
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
        <CreateWork id={id} title={title} description={description} />
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
        <h3>Meus Trabalhos</h3>
        <Box sx={{ flexGrow: 1 }} />
        <HandleModal color="#403CAA"></HandleModal>
        {modalUpdate}
      </Toolbar>
      {works ? (
        works.map((work) => (
          <Card
            key={work.id}
            sx={{
              display: "flex",
              margin: "2px",
              cursor: "pointer",
              ":hover": {
                background: "#ececf7",
              },
            }}
            onClick={() => updateWork(work.id, work.title, work.description)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "25%",
                height: "90px",
                background: "#ececf7",
                margin: "auto 0px",
                borderRadius: "5px",
              }}
            >
              <WorkIcon
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
                <Typography component="span" variant="subtitle2">
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  {work.description.substr(0, 70)}...
                </Typography>
              </CardContent>
            </Box>
            <Box sx={{ width: "2%" }}>
              <Divider
                sx={{
                  background: "#ececf7",
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
export default CardBlue;
