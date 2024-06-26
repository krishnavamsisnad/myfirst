let initialState={
    name:"",
    email:""
}
export function userReducer(state=initialState,action:any){
    if(action.type="name"){
        return {...initialState,action}

    }
}