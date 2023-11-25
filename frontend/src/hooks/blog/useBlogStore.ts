import moment from "moment";
import { Post, RequestSavePost } from "../../interface/blog/blogInterface";
import {
  onChangeModal,
  onLoadDetalle,
  onLoadDetalleNoConection,
  onLoadEntradas,
  onPostBlog,
} from "../../reducers/blog/blogSlice";
import {
  getDetalleEntradaService,
  getListaEntradasService,
  savePostService,
} from "../../services/blogServices/blogService";
import { useAppDispatch, useAppSelector } from "../../store/rootStore";
import Swal from "sweetalert2";

export const useBlogStore = () => {
  const dispatch = useAppDispatch();
  const { dialog, lstPost, detalle, detalleNoConection } = useAppSelector(
    (state) => state.blogSlice
  );
  const setModal = () => {
    dispatch(onChangeModal());
  };
  const postBlog = (data: Post) => {
    dispatch(onPostBlog(data));
  };

  const savePost = (body: RequestSavePost) => {
    savePostService(body)
      .then((response) => {
        Swal.fire({
          title: `Entrada guardada correctamente`,
          text: "La entrada se guardó correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#6e7881",
          html: `La entrada se guardó correctamente`,
        });
        const postSaved = {
          id: response.data.id,
          titulo: response.data.titulo,
          autor: response.data.autor,
          fecha: moment(response.data.fechaPublicacion).format("DD/MM/YYYY"),
          contenido: response.data.contenido,
        } as Post;
        postBlog(postSaved);
      })
      .catch((err) => {
        Swal.fire({
          title: `Ha ocurrido un error al guardar la entrada`,
          text: err?.response?.data?.error_msg || "Hubo un problema",
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#6e7881",
          html: `Ocurrió un problema al guardar el registro`,
        });
      });
  };

  const startGetEntradas = () => {
    getListaEntradasService()
      .then(({ data }) => {
        dispatch(onLoadEntradas(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const startGetDetalleEntrada = (id: number) => {
    getDetalleEntradaService(id)
      .then(({ data }) => {
        dispatch(onLoadDetalle(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onResetDetalle = () => {
    dispatch(onLoadDetalle(null));
    dispatch(onLoadDetalleNoConection(null));
  };
  const onLoadDetalleLocal = (post: Post) => {
    dispatch(onLoadDetalleNoConection(post));
  };
  const saveEntrada = (id: number) => {
    getDetalleEntradaService(id)
      .then(({ data }) => {
        const posts = JSON.parse(localStorage.getItem("downloadedPosts") || "[]");
        const postExists = posts.some((post: Post) => post.id === id);
        if (!postExists) {
          posts.push(data);
          localStorage.setItem("downloadedPosts", JSON.stringify(posts));
        } else {
          Swal.fire({
            title: "Esta entrada ya ha sido guardada previamente",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    dialog,
    lstPost,
    detalle,
    detalleNoConection,
    setModal,
    postBlog,
    savePost,
    startGetEntradas,
    startGetDetalleEntrada,
    onResetDetalle,
    onLoadDetalleLocal,
    saveEntrada,
  };
};
