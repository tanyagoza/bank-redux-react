import {configureStore} from "@reduxjs/toolkit";
import balance from "../features/api/balanceSlice.js";
import quote from "../features/quote/quoteSlice.js";

export const store = configureStore({
    reducer: {
        balance, quote
    }
})