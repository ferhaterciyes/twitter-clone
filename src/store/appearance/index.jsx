import { createSlice } from "@reduxjs/toolkit";

const initialState = {
// backgraundColor:{
//   primary:"#000",
//   secondary:"#16181c",
//   third:"#273340"
// },
// color:{
//   primary:"#1d9bf0",
//   secondary:"#8ecdf8",

// },
// fontSize:16,
backgraundColor:{
  primary:"#000",
  secondary:"#16181c",
  third:"#273340"
},
color:{
  primary:"#1d9bf0",
  secondary:"#8ecdf8",

},
fontSize:16
};

const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    // state leri manüpile etme metotları
    _setBackgraundColor: (state, action) => {
      state.backgraundColor = action.payload;
    },
    _setColor: (state, action) => {
      state.color = action.payload;
    },
    _setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { _setBackgraundColor,_setColor,_setFontSize} = appearance.actions;
export default appearance.reducer;
