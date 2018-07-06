
import fetch from 'cross-fetch';
import {loadCardSucess,itemsHasErrored,itemsIsLoading,itemsFetchDataSuccess} from './card/actions';
export function GetCard() {
    console.log("GetCard is called ");
    return dispatch =>{
        dispatch(itemsIsLoading(true));
        return getResponse('https://raw.githubusercontent.com/jmaovhasncript/reactCardApp/master/src/store/data.js').then(function(data){
            dispatch(loadCardSucess(data))
        }).catch(function(){
            dispatch(itemsHasErrored(true));
        })
        
        }

        function getResponse(url){
            return new Promise(function(resolve,reject){
                var req = new XMLHttpRequest();
                req.open('GET',url);
                req.onload = function(){
                    if (req.status == 200) {
                        // Resolve the promise with the response text
                        resolve(req.response);
                    }
                    else {
                        // Otherwise reject with the status text
                        // which will hopefully be a meaningful error
                        reject(Error(req.statusText));
                    }   
                };
                req.onerror = function(){
                    reject(Error("Network Error"));
                };
    
                req.send();
            })
        }

        
      
  }

