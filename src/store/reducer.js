const initialState = {
    a:1,
    b:1
}

// Let's create our reducer which is nothing but a function

const reducer = (state=initialState,action)=>{
    // Don't mutate the state
    const newState = {...state};

    return newState;
}

export default reducer;