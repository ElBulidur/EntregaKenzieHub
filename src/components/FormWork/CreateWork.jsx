import { useState, useEffect } from "react";

import {
  Button,
  Typography,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

export default function CreateWork({ id, title, description }) {
  const [token, setToken] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    setToken(JSON.parse(sessionStorage.getItem("authToken")));
  }, []);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome do trabalho obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const createWork = (data) => {
    data["deploy_url"] = "https://kenziehub.me";
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setMessage("Trabalho cadastrado com sucesso!");
      });
  };

  const updateWork = (data) => {};
  const deleteWork = () => {
    api
      .delete(`/users/works/${id}`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setMessage("Trabalho deletado com sucesso!");
      });
  };

  const form = (
    <form
      onSubmit={title ? handleSubmit(updateWork) : handleSubmit(createWork)}
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
      >
        <TextField
          id={"outlined-basic"}
          label="Nome do grupo"
          variant="outlined"
          helpertext={errors.title?.message}
          {...register("title")}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder={
            description ? description : "Descrição sobre o trabalho!!!"
          }
          name="description"
          style={{ width: "98%", margin: "10px 5px" }}
          helpertext={errors.description?.message}
          {...register("description")}
        />
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
        {title ? "Atualização do trabalho" : "Cadastrar Trabalho"}
      </h3>
      {message ? messageSuccess : form}
    </>
  );
}
