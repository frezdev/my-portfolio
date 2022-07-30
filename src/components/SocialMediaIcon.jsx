import React from 'react';
import Icon from '@components/Icon';
import dataSocialMedia from '../data/dataSocialMedia';
import '@styles/SocialMediaIcons.css';


function SocialMediaIcons() {
  return (
    <ul className="SocialMediaIcons">
      {dataSocialMedia.map(item => (
        <Icon
          key={item.name}
          name={item.name}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </ul>
  )
}

export default SocialMediaIcons;