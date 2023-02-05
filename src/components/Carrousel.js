import { useEffect, useState } from "react";
import cafeImage from "../assets/cafe.jpg";
import carneImage from "../assets/carne.jpg";
import pescadoImage from "../assets/pescado.jpg";
import tragosImage from "../assets/tragos.jpg";

const images = [cafeImage, carneImage, pescadoImage, tragosImage];

export default function Carrousel() {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[2]);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     if (index === images.length - 1) {
  //       setIndex(0);
  //       setImage(images[0]);
  //     } else {
  //       setIndex(index + 1);
  //       setImage(images[index + 1]);
  //     }
  //   }, 2500);

  //   return () => clearInterval(id);
  // }, [index]);

  return (
    <div
      className="carrousel"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
