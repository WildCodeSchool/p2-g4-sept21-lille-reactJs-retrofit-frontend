import styled from 'styled-components';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const ArrowLeft = styled(LeftArrow)`
  width: 80px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const ArrowRight = styled(RightArrow)`
  width: 80px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SliderContent = styled.div`
  div.slide-active {
    width: 100%;
    animation: myAnim 0.2s linear 0s 1 normal;
    @keyframes myAnim {
      0% {
        transform: translate(2em, 0);
        opacity: 0%;
      }

      50% {
        transform: translate(1em, 0);
        opacity: 50%;
      }

      100% {
        transform: translate(0em, 0);
        opacity: 100%;
      }
    }
  }
`;

export { Slider, SliderContent, ArrowLeft, ArrowRight };
