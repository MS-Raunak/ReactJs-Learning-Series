const redux = require('redux');

const createStore = redux.createStore


const CAKE_ORDERED = 'CAKE_ORDERED';

//action creater function
function orderCake() {
    //return action object
    return {
        type : CAKE_ORDERED,
        quantity:1
    }
}

const initialState = {
    numOfCakes: 10
}

// (previousState, action) => newState: reducer syntax
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes-1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)
console.log('initial state ', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated state ', store.getState());
    
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();


/**
 * Explanation:
 * consider there is a cake shop app,
 * 1-> user order is an action
 * 2-> cake shop is store
 * 3-> shopkeeper is reducer
 * 
 * In above code,
 * we are creating action using a action creater function orderCake().
 * (action returened in the form of object).
 * suppose our total cake(initial state) is 10 in shop
 * when user order a cake then shopkeeper as a reducer update the cake(9)
 * by taking initialState as an arg.
 */