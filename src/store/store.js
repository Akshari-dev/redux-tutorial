import {createStore} from "redux";
import Counter_Reducer from "./reducers/counter_reducer";



const Store=createStore(Counter_Reducer);

export default Store;