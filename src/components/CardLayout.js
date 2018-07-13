import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , Row} from 'reactstrap';
import SocialIconContainer from './SocialIconContainer';
import ProfileImage from './ProfileImage';
import '../App.css';

function RenderVideo(item){
    var props = item.props
    if(props.video){
        return <video src={props.video} poster={props.imageUrl} controls/>
    }
    return  <CardImg top width="100%" src={props.imageUrl} alt="Card image cap" />
}

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
          <RenderVideo props={item}/>
        </CardBody>
        <CardBody>
          <SocialIconContainer/>
        </CardBody>
      </Card>
      </Row>
    );
}



export default CardLayout

