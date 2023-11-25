// BlogList.tsx

import { Typography } from "@mui/material";
import { PostCard } from "./post";
import Grid from "@mui/material/Grid";
import { useUiStore } from "../hooks/ui/useUiStore";
import { Post } from "../../interface/blog/blogInterface";

interface BlogListProps {
  entries: Array<{
    id?: number;
    titulo: string;
    autor: string;
    fecha: string;
    contenido: string;
  }>;
}

export const BlogList = ({ entries }: BlogListProps) => {
  const { isOnline } = useUiStore();
  const offlinePosts = JSON.parse(
    localStorage.getItem("downloadedPosts") || "[]"
  );

  return isOnline ? (
    <Grid container spacing={2}>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <Grid item key={`key${index}`} xs={12} sm={12} md={12}>
            <PostCard
              key={`key${index}`}
              titulo={entry.titulo}
              autor={entry.autor}
              fecha={entry.fecha}
              contenido={entry.contenido.substring(0, 70)}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            No hay posts para mostrar.
          </Typography>
        </Grid>
      )}
    </Grid>
  ) : (
    <Grid container spacing={2}>
      {offlinePosts.length > 0 ? (
        offlinePosts.map((entry: Post, index: number) => (
          <Grid item key={`key${index}`} xs={12} sm={12} md={12}>
            <PostCard
              key={`key${index}`}
              titulo={entry.titulo}
              autor={entry.autor}
              fecha={entry.fecha}
              contenido={entry.contenido.substring(0, 70)}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            No hay posts para mostrar.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
