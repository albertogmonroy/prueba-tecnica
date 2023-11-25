import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GetAppIcon from "@mui/icons-material/GetApp";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import { Post } from "../../interface/blog/blogInterface";
import { useUiStore } from "../hooks/ui/useUiStore";

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

export const PostCard = ({ titulo, autor, fecha, contenido }: Post) => {
  const { isOnline } = useUiStore();
  const handleDownload = () => {
    const postInfo = {
      titulo,
      autor,
      fecha,
      contenido,
    };
    const posts = JSON.parse(localStorage.getItem("downloadedPosts") || "[]");
    posts.push(postInfo);
    localStorage.setItem("downloadedPosts", JSON.stringify(posts));
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
          <Tooltip title="Descargar" arrow>
            <DownloadButton onClick={handleDownload} size="small">
              <GetAppIcon />
            </DownloadButton>
          </Tooltip>
        ) : null}
      </StyledCardContent>
    </StyledCard>
  );
};
