import React from 'react';
import CardLayout from './components/CardLayout';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'reactstrap';
import { connect } from 'react-redux'


class App extends React.Component{
    constructor(props){
        super(props);
        
    }
    render (){  
       

        return(
            <div>
             <Container>
                 <Header/>
                {this.props.cards.cards.map(item => 
                <CardLayout key={item.id} cards={item} />
                )
                } 
                <Footer/>
             </Container>
            
            </div>
        );
       
    }
}
function mapStateToProps(state, ownProps) {
    return {
      cards: state.card
    }
  }

  export default connect(mapStateToProps)(App)
