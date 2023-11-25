import axios from "axios";
import {
  RequestSavePost,
  ResponseRequestGetAllPost,
  ResponseRequestSavePost,
} from "../../interface/blog/blogInterface";
const baseURL = "http://127.0.0.1:8000/api/";
export const savePostService = async (body: RequestSavePost) => {
  const url = "entradas";
  return await axios.post<ResponseRequestSavePost>(`${baseURL}${url}`, body);
};
export const getListaEntradasService = async () => {
  const url = "entradas";
  return await axios.get<ResponseRequestGetAllPost>(`${baseURL}${url}`);
};
export const getDetalleEntradaService = async (idEntrada: number) => {
  const url = "entradas";
  return await axios.get<ResponseRequestSavePost>(`${baseURL}${url}/${idEntrada}`);
};
