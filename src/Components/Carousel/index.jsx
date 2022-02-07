import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import ReviewCard from '../ReviewCard/index';
import { Slider, SliderContent, ArrowLeft, ArrowRight } from './style';

export default function Carousel() {
  const [instructions, setInstructions] = useState([]);
  const [activSlice, setActivSlice] = useState(1);

  useEffect(() => {
    axios
      .get(`/review`)
      .then(({ data }) => {
        setInstructions(data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  const nextSlide = () => {
    setActivSlice(activSlice >= instructions.length ? 1 : activSlice + 1);
  };

  const prevSlide = () => {
    setActivSlice(activSlice <= 1 ? instructions.length : activSlice - 1);
  };

  return (
    <Slider>
      <ArrowLeft onClick={prevSlide} />

      {instructions.map((instruction) => {
        return (
          <SliderContent onClick={nextSlide}>
            <div className={instruction.id === activSlice && 'slide-active'}>
              {instruction.id === activSlice && <ReviewCard {...instruction} />}
            </div>
          </SliderContent>
        );
      })}

      <ArrowRight onClick={nextSlide} />
    </Slider>
  );
}
Carousel.propTypes = {
  instructionString: PropTypes.string,
};
Carousel.defaultProps = {
  instructionString: '',
};
