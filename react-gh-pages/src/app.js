import React from 'react';
import CardLayout from './components/CardLayout';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'reactstrap';
import { connect } from 'react-redux'
import PaginationCom from './components/PaginationCom';
import { configureStore } from './store';
import { GetCard } from './store/card';

const store = configureStore();


class App extends React.Component{
    constructor(props){
        super(props);
        store.dispatch(GetCard('data'))
    }
   
    render (){  
        store.dispatch(GetCard('data'))
        return(
            <div>
             <Container>
                 <Header/>
                
                {!this.props.cards.itemsIsLoading && this.props.cards.cards.cards.map(item => 
                <CardLayout key={item.id} cards={item} />
                )
                } 
                <PaginationCom/>
                <Footer/>
              </Container>
            </div>
        );
       
    }
}
function mapStateToProps(state, ownProps) {
    return {
      cards: state.card,
      isLoading: state.card.itemsIsLoading
    }
  }

  export default connect(mapStateToProps)(App)
