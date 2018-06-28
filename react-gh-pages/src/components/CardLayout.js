import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , Row} from 'reactstrap';
import SocialIconContainer from './SocialIconContainer';
import '../css/index.css' ;
  

const CardLayout = (props)=>{
    const item = props.cards;
    console.log(item);
    return(
    <Row>
      <Card>
        <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.subtitle}</CardSubtitle>
          <CardText>{item.content}</CardText>
          <SocialIconContainer/>
        </CardBody>
      </Card>
      </Row>
     
    );
}



export default CardLayout

