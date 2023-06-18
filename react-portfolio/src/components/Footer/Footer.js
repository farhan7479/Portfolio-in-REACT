import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            &copy; <FontAwesomeIcon icon={faHeart} size="sm" /> 2023 Farhan Shahid
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
