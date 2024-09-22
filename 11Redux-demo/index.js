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

