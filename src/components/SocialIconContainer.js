import React from 'react';
import { SocialIcon } from 'react-social-icons';



const SocialIconContainer = (props) =>{
    return(
        <div>
        <SocialIcon network="twitter" url="http://twitter.com/" className="socialIcon" />
        <SocialIcon network="facebook" url="http://facebook.com/" className="socialIcon" />
        <SocialIcon network="instagram" url="http://instagram.com/" className="socialIcon" />
        </div>
    );
}

export default SocialIconContainer;