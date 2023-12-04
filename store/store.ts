import { configureStore } from "@reduxjs/toolkit";

import { contactFormSlice } from "./slices/contactForm";

const store = configureStore({
    reducer:{
        contactForm : contactFormSlice.reducer
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>