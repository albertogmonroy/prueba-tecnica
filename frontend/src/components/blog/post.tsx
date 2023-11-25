import { Post } from "../../interface/blog/blogInterface";
import { styled } from "@mui/system";
import { useUiStore } from "../../hooks/ui/useUiStore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GetAppIcon from "@mui/icons-material/GetApp";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useBlogStore } from "../../hooks/blog/useBlogStore";

const StyledCard = styled(Card)({
  transition: "box-shadow 0.3s",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover, &:focus": {
    boxShadow: "0px 6px 12px rgba(33, 150, 243, 0.3)",
  },
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  position: "relative",
});

const Title = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const MetaInfo = styled(Typography)({
  fontSize: "0.8rem",
  color: "#666",
});

const ContentPreview = styled(Typography)({
  flex: "1",
  fontSize: "1rem",
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
});

const DownloadButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});
const ViewDetailButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  left: 0,
});

export const PostCard = ({ id, titulo, autor, fecha, contenido }: Post) => {
  const { isOnline } = useUiStore();
  const { startGetDetalleEntrada, onLoadDetalleLocal, saveEntrada } =
    useBlogStore();
  const handleDownload = () => {
    saveEntrada(id);
  };
  const handleViewDetail = () => {
    const posts = JSON.parse(localStorage.getItem("downloadedPosts") || "[]");
    const postExists = posts.find((post: Post) => post.id === id);    
    isOnline ? startGetDetalleEntrada(id) : onLoadDetalleLocal(postExists);
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <Title>{titulo}</Title>
        <MetaInfo color="textSecondary" gutterBottom>
          {autor} - {fecha}
        </MetaInfo>
        <ContentPreview color="textSecondary">{contenido}</ContentPreview>
        {isOnline ? (
          <>
            <Tooltip title="Descargar" arrow>
              <DownloadButton onClick={handleDownload} size="small">
                <GetAppIcon />
              </DownloadButton>
            </Tooltip>
          </>
        ) : null}
        <Tooltip title="Ver Detalle" arrow>
          <ViewDetailButton onClick={handleViewDetail} size="small">
            <InfoIcon />
          </ViewDetailButton>
        </Tooltip>
      </StyledCardContent>
    </StyledCard>
  );
};
