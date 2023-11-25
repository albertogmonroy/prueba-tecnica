import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useBlogStore } from "../../hooks/blog/useBlogStore";
import moment from "moment";
import { PostCardDetalle } from "./postDetalle";

export const DetalleEntrada = () => {
  const { detalle, detalleNoConection, onResetDetalle } = useBlogStore();

  const isDialogOpen = Boolean(detalle || detalleNoConection);

  const handleCloseDialog = () => {
    onResetDetalle();
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
      <DialogTitle>Detalle de la Entrada</DialogTitle>
      <DialogContent>
        <PostCardDetalle
         titulo={
            detalle
              ? String(detalle?.titulo)
              : String(detalleNoConection?.titulo)
          }
          autor={
            detalle ? String(detalle?.autor) : String(detalleNoConection?.autor)
          }
          contenido={
            detalle
              ? String(detalle?.contenido)
              : String(detalleNoConection?.contenido)
          }
          fecha={
            detalle
              ? moment(detalle?.fechaPublicacion).format("DD/MM/YYYY HH:mm:ss")
              : moment(detalleNoConection?.fecha).format("DD/MM/YYYY HH:mm:ss")
          }
          id={detalle ? Number(detalle?.id) : Number(detalleNoConection?.id)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetalleEntrada;
