// NewPostForm.tsx

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormInputText } from "../ui/FormInputText";
import { FormInputTextArea } from "../ui/FormInputTextArea";
import { FormProvider, useForm } from "react-hook-form";
import { Grid, Typography } from "@mui/material";
import { useBlogStore } from "../hooks/blog/useBlogStore";
import { Post } from "../../interface/blog/blogInterface";
import { FormCalendar } from "../ui/FormCalendar";

interface NewPostFormProps {
  onClose: () => void;
}

interface FormData {
  titulo: string;
  fecha: Date | string;
  autor: string;
  contenido: string;
}

export const NewPostForm = ({ onClose }: NewPostFormProps) => {
  const methods = useForm<FormData>();
  const { postBlog } = useBlogStore();

  const onSubmit = (data: FormData) => {
    data.fecha = data.fecha.toLocaleString();
    postBlog(data as Post);
    methods.reset();
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Modal open={true} onClose={onClose}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                bgcolor: "#006c9a",
                padding: 2,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" color="white">
                Nuevo Post
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormInputText
                    name="titulo"
                    label="Titulo"
                    rules={{
                      required: {
                        value: true,
                        message: "Por favor Ingresa un título",
                      },
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormInputText
                    name="autor"
                    label="Autor"
                    rules={{
                      required: {
                        value: true,
                        message: "Por favor Ingresa el autor",
                      },
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormCalendar
                    name="fecha"
                    label="Fecha"
                    fullWidth
                    rules={{
                      required: {
                        value: true,
                        message: "Por favor Ingresa la fecha",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormInputTextArea
                    name="contenido"
                    fullWidth
                    multiline
                    rows={4}
                    rules={{
                      required: {
                        value: true,
                        message: "Por favor Ingresa el contenido",
                      },
                    }}
                    label="Contenido"
                  />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={onClose}
                      fullWidth
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.background.paper,
                        color: (theme) => theme.palette.primary.main,
                        border: "1px solid",
                        borderColor: (theme) => theme.palette.primary.main,
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.background.paper,
                        color: (theme) => theme.palette.primary.main,
                        border: "1px solid",
                        borderColor: (theme) => theme.palette.primary.main,
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      Crear Post
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </Modal>
    </FormProvider>
  );
};
