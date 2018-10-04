const initialState = {
    a:1,
    b:1
}

// Let's create our reducer which is nothing but a function

const reducer = (state=initialState,action)=>{
    // Don't mutate the state
    // const newState = {...state};

    switch(action.type){
        case 'ACTION_1':
        return{
            ...state, // First Copy the state then update the newState
            a:state.a + state.b
        }

        case 'ACTION_2':
        return{
            ...state,
            b:state.a + state.b
        }

        default:
        return state;
            
    }

}

export default reducer;