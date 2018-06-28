import React from 'react';
import { SocialIcon } from 'react-social-icons';



const SocialIconContainer = (props) =>{
    return(
        <div className="socialContainer">
        <SocialIcon network="pinterest"  className="socialIcon" /> 

        <SocialIcon network="twitter" color="#ff5a01" />
        </div>
    );
}

export default SocialIconContainer;