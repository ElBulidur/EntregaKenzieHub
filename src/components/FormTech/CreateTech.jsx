import { useState, useEffect } from "react";

import { Button, Box, Stack, TextField, Typography } from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

export default function CreateTech({ id, title, status }) {
  const [alignment, setAlignment] = useState(status ? status : "");

  const [token, setToken] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    setToken(JSON.parse(sessionStorage.getItem("authToken")));
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("E-mail obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const createTech = (data) => {
    data["status"] = alignment;
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setMessage("Tecnologia cadastrada com sucesso!");
      });
  };

  const updateTech = (data) => {
    if (data["title"]) {
    }
  };

  const deleteWork = () => {
    api
      .delete(`/users/works/${id}`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setMessage("Tecnologia deletada com sucesso!");
      });
  };

  const form = (
    <form
      onSubmit={title ? handleSubmit(updateTech) : handleSubmit(createTech)}
    >
      <Stack
        spacing={2}
        sx={{
          minWidth: "300px",
          padding: "20px",
          borderRadius: "20px",
          borderTop: "2px solid #f5f5f5",
          borderBottom: "2px solid #f5f5f5",
        }}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        nowrap
      >
        <TextField
          id="outlined-basic"
          label="Nome da Tecnologia"
          variant="outlined"
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register("title")}
        />
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{
              margin: "10px auto",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <ToggleButton value="Iniciante">INICIANTE</ToggleButton>
            <ToggleButton value="Intermediário">INTERMEDIÁRIO</ToggleButton>
            <ToggleButton value="Avançado">AVANÇADO</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Button type="submit" variant="contained">
          {title ? "Atualizar" : "Criar"}
        </Button>
        {title && (
          <Button color="error" variant="contained" onClick={deleteWork}>
            Deletar
          </Button>
        )}
      </Stack>
    </form>
  );

  const messageSuccess = (
    <Typography
      variant="h5"
      gutterBottom
      component="span"
      sx={{ color: "blue", padding: "10px" }}
    >
      {message}
    </Typography>
  );

  return (
    <>
      <h3 style={{ margin: "0px", textAlign: "center" }}>
        {title ? "Atualização da tecnologia" : "Cadastrar Tecnologias"}
      </h3>
      {message ? messageSuccess : form}
    </>
  );
}
