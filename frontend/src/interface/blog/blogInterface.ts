/* Interfaz para mandejo de reducer de Blog */
export interface BlogState {
  dialog: boolean;
  lstPost: Post[];
  detalle: ResponseRequestSavePost | null;
  detalleNoConection: Post | null;
}
/* Interfaz para mandejo de componente de Blog */
export interface Post {
  id: number;
  titulo: string;
  autor: string;
  fecha: string;
  contenido: string;
}

/* Interfaz para el guardado de la entrada */
export interface RequestSavePost {
  titulo: string;
  autor: string;
  contenido: string;
  fechaPublicacion: string;
}
/* Interfaz de respuesta del registro */
export interface ResponseRequestSavePost {
  titulo: string;
  autor: string;
  contenido: string;
  fechaPublicacion: Date;
  updated_at: Date;
  created_at: Date;
  id: number;
}
/* Interfaz de respuesta de obtener todas las entradas */
export interface ResponseRequestGetAllPost {
  id: number;
  titulo: string;
  autor: string;
  contenido: string;
  fechaPublicacion: Date;
  created_at: Date;
  updated_at: Date;
}
