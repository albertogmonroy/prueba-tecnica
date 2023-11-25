import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BlogList } from "./BlogList";
import { NewPostForm } from "./NewPostForm";
import { FormInputText } from "../ui/FormInputText";
import { IconButton, InputAdornment, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormProvider, useForm } from "react-hook-form";
import { useBlogStore } from "../hooks/blog/useBlogStore";
import { useUiStore } from "../hooks/ui/useUiStore";
interface FormData {
  buscar: string;
}
export const BlogView = () => {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const methods = useForm<FormData>();
  const { lstPost } = useBlogStore();
  const { isOnline } = useUiStore();
  const handleNewPostClick = () => {
    setShowNewPostForm(true);
  };

  const handleNewPostClose = () => {
    setShowNewPostForm(false);
  };
  const onSubmit = (data: FormData) => {
    const searchTerm = data.buscar.toLowerCase();
    const filtered = lstPost.filter(
      (post) =>
        post.titulo.toLowerCase().includes(searchTerm) ||
        post.autor.toLowerCase().includes(searchTerm) ||
        post.contenido.toLowerCase().includes(searchTerm)
    );

    console.log(filtered);
  };
  const handleBlur = () => {
    methods.clearErrors("buscar");
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>¡Bienvenido a Mi Blog!</h1>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isOnline}
            onClick={handleNewPostClick}
          >
            Nuevo Post
          </Button>
        </Grid>
        {!isOnline && (
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{ padding: 2, background: "#f8d7da", borderRadius: 8 }}
              >
                <Typography variant="subtitle1" align="center" color="error">
                  ¡Ups! Actualmente no tienes conexión a internet. Sin embargo,
                  puedes visualizar los posts que hayas guardado previamente.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            marginTop: -4,
          }}
        >
          {showNewPostForm && <NewPostForm onClose={handleNewPostClose} />}
        </Grid>
        <Grid item xs={12}>
          <FormProvider {...methods}>
            <form
              style={{ textAlign: "center", marginTop: "20px" }}
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <FormInputText
                name="buscar"
                rules={{
                  required: {
                    value: true,
                    message: "Por favor Ingresa un título",
                  },
                }}
                onBlur={handleBlur}
                label=""
                variant="outlined"
                placeholder="Buscar..."
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="primary" type="submit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </FormProvider>
        </Grid>
        <Grid item xs={12}>
          <BlogList entries={lstPost} />
        </Grid>
      </Grid>
    </Container>
  );
};