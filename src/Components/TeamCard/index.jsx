import propTypes from 'prop-types';
import { Card, Icon } from './style';

export default function TeamCard({ firstName, lastName, role, img, link }) {
  return (
    <Card>
      <img src={img} alt="staff" />
      <h1>
        {firstName}
        <span> </span> {lastName}
      </h1>
      <h2>{role}</h2>
      <Icon>{link}</Icon>
    </Card>
  );
}

TeamCard.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
  role: propTypes.string,
  img: propTypes.string,
  link: propTypes.string,
};
TeamCard.defaultProps = {
  firstName: '',
  lastName: '',
  role: '',
  img: '',
  link: '',
};
