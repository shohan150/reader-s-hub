import { slidesData } from "../../data/slidesData.js";
import Indicators from "./Indicators";
import Slides from "./Slides.jsx";

export default function HeroSection() {
  return (
    <div className="carousel w-full mt-12">
      {slidesData.map((slide) => (
        <div
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
          key={slide.id}
        >
          <Slides title={slide.title} image={slide.image} />
          <Indicators prev={slide.prev} next={slide.next} />
        </div>
      ))}
    </div>
  );
}
