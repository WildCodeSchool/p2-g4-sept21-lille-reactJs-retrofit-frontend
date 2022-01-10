import PropTypes from 'prop-types';
import { useState } from 'react';
import ReviewCard from 'Components/ReviewCard';
import { Slider, SliderContent, ArrowLeft, ArrowRight } from './style';

const reviews = [
  {
    id: 1,
    name: 'Danny D.',
    review: "Salut c'est cool votre site",
    stars: 5,
  },
  {
    id: 2,
    name: 'Pierre P.',
    review: 'Whaaouuu !',
    stars: 4,
  },
  {
    id: 3,
    name: 'Alphonse Z.',
    review: 'Deçu de la prestation ...',
    stars: 2,
  },
  {
    id: 4,
    name: 'Nacyme G.',
    review: 'Au top merci ! :)',
    stars: 5,
  },
];

export default function Carousel() {
  const [instructions] = useState(reviews);
  const [activSlice, setActivSlice] = useState(1);

  const nextSlide = () => {
    setActivSlice(activSlice >= instructions.length ? 1 : activSlice + 1);
  };

  const prevSlide = () => {
    setActivSlice(activSlice <= 1 ? instructions.length : activSlice - 1);
  };

  return (
    <Slider>
      <ArrowLeft onClick={prevSlide} />

      {reviews.map((review) => {
        return (
          <SliderContent onClick={nextSlide}>
            <div className={review.id === activSlice && 'slide-active'}>
              {review.id === activSlice && <ReviewCard {...review} />}
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
