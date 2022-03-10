export const initialState ={
    mycart:[],
    user: null
};
const reducer = (state, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_CART":
            return{
            ...state,
            mycart:[...state.mycart,action.item],
            };
        case "REMOVE_FROM_MYCART":
            let newmycart = [...state.mycart]
            const index =  state.mycart.findIndex((mycartitem)=> mylistitem.id === action.id)
        if(index >= 0){
            newmylist.splice(index, 1);
        }else{
            console.warn(
                'Cant remove movie(id: ${action.id}) as it nowhere on the screen'
            );

        }
            return { ...state,mycart : newmycart }

            default:
                return state;

    }
}
export default reducer; 