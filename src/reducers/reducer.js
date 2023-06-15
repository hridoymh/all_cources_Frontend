const reducer = (state,action) => {
    if(action.type === "login"){
        return action.payload
    }
    return state
}

export default reducer