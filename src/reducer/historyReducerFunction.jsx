const historyReducerFunction = (state,action) => {
switch (action.type) {
    case "ADD_TO_HISTORY":
        return{...state, historyArr: [ ...action.payload]}

    case "REMOVE_FROM_HISTORY":
        return{...state, historyArr: [...action.payload]}

    case "CLEAR_ALL_FROM_HISTORY":
        return{...state, historyArr: [...action.payload]}
    default:
        return state;
}
}

export {historyReducerFunction}