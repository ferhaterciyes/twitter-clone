import { createSlice } from "@reduxjs/toolkit";

const initialState = {
currentAccount : {
    id:1,
    username:"İlknur",
    fullName:"./ilknur66",
    avatar:"https://pbs.twimg.com/profile_images/1581295208783921152/xmjrukWz_400x400.jpg"
},
accounts:[
    {
        id:1,
        username:"İlknur",
        fullName:"ilknur66",
        avatar:"https://pbs.twimg.com/profile_images/1581295208783921152/xmjrukWz_400x400.jpg"
    },
    {
        id:2,
        username:"ferhaterciyes",
        fullName:"Ferhat Erciyes",
        avatar:"https://pbs.twimg.com/profile_images/1481326125859094529/0slHQerR_400x400.jpg"
    },
]

}

const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        // state leri manüpile etme mettotları
        _addAccount:(state,action)=>{
            state.accounts.push(action.payload)
        },
        _removeAccount: (state,action) => {
            state.accounts.filter(account => account.id === action.payload)           
            if(state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state,action)=>{
            state.currentAccount = action.payload
        }
    }
})
export const {_addAccount, _setCurrentAccount , _removeAccount} = auth.actions
export default auth.reducer;