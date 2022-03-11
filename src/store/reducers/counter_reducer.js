 function Counter_Reducer(state={counter:1}, action){


    switch(action.type){
        case 'INCREMENT_COUNTER':
            
            return{
                ...state,
                     counter:state.counter+1 }

        case 'DECREMENT_COUNTER':
           
        return{

       ...state,
            counter:state.counter-1 }

            case 'TWICE_COUNTER':
            return{
                ...state,
                counter:state.counter*2 }

        default: return state;
    }
 }


 export default Counter_Reducer;



//  user reducer 
//  name:""
//  age:""
//  city:""
//  profession:""
//  ......