
 let Incremental_counter=()=>dispatch=>{
dispatch({type:'INCREMENT_COUNTER'})

}
 let Decremental_counter=()=>dispatch=>{
dispatch({type:'DECREMENT_COUNTER'})
}

let Twice_counter=()=>dispatch=>{
    dispatch({type:'TWICE_COUNTER'})
    }
    

export {Incremental_counter, Decremental_counter,Twice_counter}