export default function note (state={}, action={}){
    switch (action.type) {
        case "EDITING_NOTE":
            return {
                ...state,
                state: action.data
            }
        default:
            return state;
    }
}