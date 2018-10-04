const initialState = {
    b:1
}

const reducerB = (state=initialState,action)=>{
    
    switch(action.type){
        case 'ACTION_B':
        return{
            ...state,
            b:state.b + action.payload
        }
        default:
        return state;
    }
}

export default reducerB;