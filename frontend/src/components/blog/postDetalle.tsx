import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Post } from "../../interface/blog/blogInterface";

const StyledCardWrapper = styled(Card)({
  transition: "box-shadow 0.3s",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover, &:focus": {
    boxShadow: "0px 6px 12px rgba(33, 150, 243, 0.3)",
  },
});

const StyledCardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  position: "relative",
});


const TitleTypography = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const MetaInfoTypography = styled(Typography)({
  fontSize: "0.8rem",
  color: "#666",
});

const ContentPreviewTypography = styled(Typography)({
    flex: "1",
    fontSize: "1rem",
    color: "#333",
    overflow: "hidden",
    wordWrap: "break-word",
  });

export const PostCardDetalle = ({ id, titulo, autor, fecha, contenido }: Post) => {
  return (
    <StyledCardWrapper key={id}>
      <StyledCardContentWrapper>
        <TitleTypography>{titulo}</TitleTypography>
        <MetaInfoTypography color="textSecondary" gutterBottom>
          {autor} - {fecha}
        </MetaInfoTypography>
        <ContentPreviewTypography color="textSecondary">{contenido}</ContentPreviewTypography>
      </StyledCardContentWrapper>
    </StyledCardWrapper>
  );
};

