import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , Row} from 'reactstrap';
import SocialIconContainer from './SocialIconContainer';
import ProfileImage from './ProfileImage';
import '../css/index.css' ;
  

const CardLayout = (props)=>{
    const item = props.cards;
    console.log(item);
    return(
    <Row>
      <Card>
        <CardBody>
          <ProfileImage profileImage={item.profileImage} />
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.subtitle}</CardSubtitle>
          <CardText>{item.content}</CardText>
        </CardBody>
        <CardBody>
          <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
        </CardBody>
        <CardBody>
          <SocialIconContainer/>
        </CardBody>
      </Card>
      </Row>
     
    );
}



export default CardLayout

