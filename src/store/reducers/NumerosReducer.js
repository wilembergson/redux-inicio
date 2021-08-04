const initialState = {
    min: 3,
    max:41
}

export default function(state = initialState, action){

    switch(action.type){
        case 'NUM_MIN_ALTERADO':
            return{
                ...state,
                min: action.payload
        }
        case 'NUM_MAX_ALTERADO':
            return{
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}