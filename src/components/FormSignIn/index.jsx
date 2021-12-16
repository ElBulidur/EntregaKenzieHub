import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import LogoKenzie from "../../assets/LogoKenzie";

import { Stack, Button, TextField, Typography } from "@mui/material";

import api from "../../services/api";

import toast from "react-hot-toast";

import { theme } from "../../styles/ThemeDefault";

export default function FormSignIn() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const login = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        window.sessionStorage.clear();
        window.sessionStorage.setItem(
          "authToken",
          JSON.stringify(response.data.token)
        );
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Usuário ou senha inválido!");
      });
  };

  return (
    <>
      <LogoKenzie />
      <form onSubmit={handleSubmit(login)}>
        <Stack
          spacing={2}
          sx={{
            border: "2px solid #f5f5f5",
            minWidth: "300px",
            padding: "20px",
            borderRadius: "20px",
            background: "#ffffff",
          }}
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <TextField
            id="name"
            label="Nome do Usuario"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            id="password"
            label="Digite sua senha"
            variant="outlined"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ background: theme.palette.btnBlue.main }}
          >
            Entrar
          </Button>
          <Typography
            variant="body2"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Criar uma Página para mostar suas
            <br />
            <strong>habilidades, metas e progresso.</strong>
          </Typography>
          <Button
            onClick={() => history.push("/signUp")}
            variant="contained"
            sx={{
              background: theme.palette.btnGrey.main,
              color: theme.palette.grey100.main,
            }}
          >
            Cadastrar
          </Button>
        </Stack>
      </form>
    </>
  );
}
