import React from 'react';
import PropTypes from 'prop-types';

export default (props) => {
  return (
    <>
      <img
        src={props.img.profileImage}
        alt="Avatar"
        style={{ width: 100, height: 100 }}
      />
      <h2>Name: {props.name}</h2>
      <h3>Username: {props.username}</h3>
      <h3>Clearance Levels:</h3>
      <p>{props.clearance.map(
        (item, idx) => {
          let useKeyAlt = `${item}-${idx}`;
          return <span key={useKeyAlt} alt={useKeyAlt} className="clearance-level">{item}</span>
        }
      )}</p>
    </>
  )
}

Badge.propTypes = {
  img: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  clearance: PropTypes.arrayOf(PropTypes.number),
  drivingInfo: PropTypes.shape({
    license: PropTypes.bool.isRequired,
    licenseNumber: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
  })
}

export default Badge;

{/* <Badge
    name="Eric Bishard"
    username="httpJunkie"
    img={{ profileImage: "https://github.com/httpJunkie.png" }}
    clearance={[1, 2, 3, 5, 8, 13, 21, 1]}
    drivingInfo={{
      license: true,
      licenseNumber: 904671856929234137,
      state: 'CA',
      valid: false
    }}
  /> */}