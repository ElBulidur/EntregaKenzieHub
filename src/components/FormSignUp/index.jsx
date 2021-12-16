import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Link } from "react-router-dom";

import LogoKenzie from "../../assets/LogoKenzie";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";

import toast from "react-hot-toast";

import api from "../../services/api";

import { Button, TextField, Typography, Stack, Box } from "@mui/material";

import { theme } from "../../styles/ThemeDefault";

export default function FormSignUp() {
  const history = useHistory();

  const [alignment, setAlignment] = useState("");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    emailRepeat: yup
      .string()
      .oneOf([yup.ref("email"), null], "Precisa confirmar o email"),
    bio: yup
      .string()
      .required("É obrigatório o preenchimento da sua biografia"),
    contact: yup.string().required("É obrigatório colocar algum contato"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null], "Precisa confirmar a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const addUser = (data) => {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: alignment,
    };
    api
      .post("/users/", newData, {})
      .then((response) => {
        window.sessionStorage.clear();
        toast.success("Usuãrio cadastrado com sucesso!!!");
        history.push("/login");
      })
      .catch((err) => toast.error(`E-mail já cadastrado no sistema!!!`));
  };

  return (
    <>
      <LogoKenzie />
      <form onSubmit={handleSubmit(addUser)}>
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
          nowrap
        >
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Confirmação do e-mail"
            variant="outlined"
            error={!!errors.emailRepeat}
            helperText={errors.emailRepeat?.message}
            {...register("emailRepeat")}
          />
          <TextField
            id="outlined-basic"
            label="Biografia"
            variant="outlined"
            error={!!errors.bio}
            helperText={errors.bio?.message}
            {...register("bio")}
          />
          <TextField
            id="outlined-basic"
            label="Contato"
            variant="outlined"
            error={!!errors.contact}
            helperText={errors.contact?.message}
            {...register("contact")}
          />
          <Box>
            <Typography>Selecione o Módulo: </Typography>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              error={!!errors.course_module}
              helperText={errors.course_module?.message}
              {...register("course_module")}
              onChange={handleChange}
            >
              {errors.course_module?.message}
              <ToggleButton
                sx={{ border: "none" }}
                value="Primeiro módulo (Introdução ao Frontend)"
              >
                Primeiro
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="Segundo módulo (Frontend Avançado)"
              >
                Segundo
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="Terceiro módulo (Introdução ao Backend)"
              >
                Terceiro
              </ToggleButton>
              <ToggleButton
                sx={{ border: "none" }}
                value="Quarto módulo (Backend Avançado)"
              >
                Quarto
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <TextField
            id="outlined-basic"
            label="Senha"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <TextField
            id="outlined-basic"
            label="Confirmação de senha"
            type="password"
            variant="outlined"
            error={!!errors.passwordRepeat}
            helperText={errors.passwordRepeat?.message}
            {...register("passwordRepeat")}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ background: theme.palette.btnBlue.main }}
          >
            Cadastrar
          </Button>
          <Typography>
            Já tem uma conta? <Link to="/login">clique aqui</Link> para entrar.{" "}
          </Typography>
        </Stack>
      </form>
    </>
  );
}
