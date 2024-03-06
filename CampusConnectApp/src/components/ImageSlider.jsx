import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    { url: "./assets/images/campusconnect.jpeg" },
    { url: "./assets/images/fun-party-with-dj1.jpg" },
    { url: "./assets/images/fun-party-with-dj2.jpg" },
    { url: "./assets/images/fun-party-with-dj.jpg" },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={700}
        height={450}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
