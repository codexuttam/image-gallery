import React, { useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgRotate from "lightgallery/plugins/rotate";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";

const images = [
  { src: image1, alt: "Flag of India" },
  { src: image2, alt: "2" },
  { src: image3, alt: "3" },
  { src: image4, alt: "4" },
  { src: image5, alt: "5" },
  { src: image6, alt: "6" },
  { src: image7, alt: "7" },
  { src: image8, alt: "8" },
  { src: image9, alt: "9" },
  { src: image10, alt: "10" },
  { src: image11, alt: "11" },
  { src: image12, alt: "12" },
  { src: image13, alt: "13" },
  { src: image14, alt: "14" },
  { src: image15, alt: "15" },
  { src: image16, alt: "16" },
  { src: image17, alt: "17" },
  { src: image18, alt: "18" },
  { src: image19, alt: "19" },
];

export function Gallery() {
  const lightGalleryRef = useRef();

  const openGallery = (index) => {
    lightGalleryRef.current?.openGallery(index);
  };

  return (
    <div className="App">
      <div className="content">
        {images.map((image, index) => (
          <span
            key={index}
            className="span"
            style={{ "--index": index }}
            onClick={() => openGallery(index)}
            tabIndex={0}
            role="button"
          >
            <img
              className="image"
              alt={image.alt}
              src={image.src}
              loading="lazy"
            />
          </span>
        ))}
      </div>
      {/* Hidden LightGallery instance */}
      <LightGallery
        dynamic
        dynamicEl={images.map((img) => ({
          src: img.src,
          thumb: img.src,
          subHtml: `<h4>${img.alt}</h4>`,
        }))}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgFullscreen,
          lgShare,
          lgAutoplay,
          lgRotate,
        ]}
        closable={true}
        download={true}
        counter={true}
        getCaptionFromTitleOrAlt={true}
        showCloseIcon={true}
        showMaximizeIcon={true}
        showThumbByDefault={true}
        onInit={(ref) => (lightGalleryRef.current = ref.instance)}
      />
    </div>
  );
}