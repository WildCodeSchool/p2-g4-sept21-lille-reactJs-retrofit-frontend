import propTypes from 'prop-types';
import { Card, Icon } from './style';

export default function TeamCard({
  firstName,
  lastName,
  role,
  profilPic,
  link,
}) {
  return (
    <Card>
      <img src={profilPic} alt="staff" />
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
  profilPic: propTypes.string,
  link: propTypes.string,
};
TeamCard.defaultProps = {
  firstName: '',
  lastName: '',
  role: '',
  profilPic: '',
  link: '',
};
