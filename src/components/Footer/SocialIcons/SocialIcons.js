import React from 'react';

import './SocialIcons.css';

const SocialIcons = props => {
    return(
        <li><a href="#"><ion-icon name={props.socialIcon} class={props.socialIcon}></ion-icon></a></li>
    );
}

export default SocialIcons;