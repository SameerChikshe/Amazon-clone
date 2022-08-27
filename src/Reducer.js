export const initialState ={
    basket: [],
    user:null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        
case "SET_USER":
    return {
        ...state,
user:action.user
    }


        case "ADD_TO_BASKET":
            //logic to add item to basket
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
       

            case "REMOVE_ITEM_FROM_BASKET":
            //logic to removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );

if (index => 0) {
    //items exist in the basket, remove it...

newBasket.splice(index,1);
}else{
    console.warn(
"Cant remove product (id: ${action.id}) as it is not exist"
    );
    }
    
    return {
        ...state,
        basket:newBasket,

    };


    
            default:
            return state;
    }}


    export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount  , 0)

export default reducer;
