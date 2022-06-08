import React from 'react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './info.css';

const Info = () => {
  return (
    <div className='info-container container'>
      <div className='info-news'>
        <FontAwesomeIcon icon={faCircleInfo} />Get the advice you need. Check the latest COVID-19 restrictions before you travel.<a href="#!">Learn more</a>
      </div>
    </div>
  )
}

export default Info