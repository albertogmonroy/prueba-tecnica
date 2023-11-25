/* Interfaz para mandejo de reducer de Blog */
export interface BlogState {
  dialog: boolean;
  lstPost: Post[];
}
/* Interfaz para mandejo de componente de Blog */
export interface Post {
  id?: number;
  titulo: string;
  autor: string;
  fecha: string;
  contenido: string;
}
