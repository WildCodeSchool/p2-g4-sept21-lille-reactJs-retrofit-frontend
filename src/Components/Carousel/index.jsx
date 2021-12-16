import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import ReviewCard from 'Components/ReviewCard';
import { Slider, SliderContent } from './style';

export default function Carousel({ instructionString }) {
  const [instructions, setInstruction] = useState([]);
  const [activSlice, setActivSlice] = useState(0);

  const nextSlide = () => {
    setActivSlice(
      activSlice < instructions.length - 1 ? activSlice + 1 : activSlice
    );
  };

  const prevSlide = () => {
    setActivSlice(activSlice !== 0 ? activSlice - 1 : activSlice);
  };

  useEffect(() => {
    setInstruction(instructionString.split('. '));
  }, [instructionString]);

  return (
    <Slider>
      <div className="step">
        <FaArrowCircleLeft
          className={
            activSlice !== 0 ? 'left-arrow active wiggle' : 'left-arrow'
          }
          onClick={prevSlide}
        />

        <SliderContent>
          {instructions.map((slide, id) => {
            return (
              <div
                className={id === activSlice ? 'slide active' : 'slide off '}
              >
                {id === activSlice && <ReviewCard />}
              </div>
            );
          })}
        </SliderContent>

        <FaArrowCircleRight
          className={
            activSlice === instructions.length - 1
              ? 'right-arrow'
              : 'right-arrow active wiggle'
          }
          onClick={nextSlide}
        />
      </div>
      {instructions.length > 1 ? (
        <span>
          {activSlice + 1} / {instructions.length}
        </span>
      ) : null}
    </Slider>
  );
}
Carousel.propTypes = {
  instructionString: PropTypes.string,
};
Carousel.defaultProps = {
  instructionString: '',
};
