import SimpleImageSlider from "react-simple-image-slider";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 740px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  const [sliderWidth, setSliderWidth] = useState("100%");
  const [maxSliderHeight, setMaxSliderHeight] = useState("550px");

  useEffect(() => {
    if (isLargerThan900) {
      setSliderWidth("100%");
      setMaxSliderHeight("550px");
    } else if (isLargerThan700) {
      setSliderWidth("768px");
      setMaxSliderHeight("400px");
    } else {
      setSliderWidth("425px");
      setMaxSliderHeight("300px");
    }
  }, [isLargerThan700, isLargerThan900]);

  const images = [
    { url: "./assets/images/fun-party-with-dj1.jpg" },
    { url: "./assets/images/fun-party-with-dj2.jpg" },
    { url: "./assets/images/fun-party-with-dj.jpg" },
  ];
  return (
    <Box
      display="flex"
      overflow="hidden"
      borderRadius="md"
    >
      <SimpleImageSlider
        width={sliderWidth}
        height={maxSliderHeight}
        images={images}
        showBullets={true}
        showNavs={true}

      />
    </Box>
  );
};

export default ImageSlider;
