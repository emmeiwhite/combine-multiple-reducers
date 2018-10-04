const initialState = {
    a:1
}

const reducerA = (state=initialState,action)=>{
    
    switch(action.type){
        case 'ACTION_A':
        return{
            ...state,
            a:state.a + action.payload
        }
        default:
        return state;
    }
}

export default reducerA;