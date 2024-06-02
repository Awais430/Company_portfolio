import React from "react";
import { Box, Grid, Card, CardMedia, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import image1 from "../assets/aayushi.jpg";
import image2 from "../assets/single man.jpeg";
import image3 from "../assets/team-1.jpg";

const images = [image1, image2, image3];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ width: "50%", height: "50%" }}>
            <CardMedia
              component="img"
              height="400"
              image={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              sx={{ width: "100%", height: "100%" }}
            />
            <Box sx={{ position: "absolute", top: "50%", left: "4px" }}>
              <IconButton onClick={handlePrevious}>
                <NavigateBeforeIcon />
              </IconButton>
            </Box>
            <Box sx={{ position: "absolute", top: "50%", right: "4px" }}>
              <IconButton onClick={handleNext}>
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          {images.map((image, index) => (
            <IconButton
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                color:
                  index === currentImageIndex
                    ? "primary.main"
                    : "action.active",
              }}
            >
              &bull;
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageSlider;
