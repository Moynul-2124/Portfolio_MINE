







"use client"
import { configureStore } from '@reduxjs/toolkit';
import simaReducer from '../../../(dashboardlayout)/about/Redux/Counter/simaSlice';
import { dataApi } from '../../../api/upload/dataApi';
import counterReducer from "../../../(mainlayout)/Redux/counter/counterSlice"
import heroTextReducer from "../../../(mainlayout)/Redux/counter/heroTextSlice"
import languageReducer from "../../../(mainlayout)/Redux/counter/langugeSlice"
import cvReducer from "../../../(mainlayout)/Redux/counter/cvSlice"
import curtainReducer from "../../../(mainlayout)/Redux/counter/curtainSlice"
import testimonialReducer from "../../../(mainlayout)/Redux/counter/testimonialSlice"
import pageTransitionReducer from "../../../(mainlayout)/Redux/counter/curtainSlice"

export const store = configureStore({
  reducer: {
    sima: simaReducer,
    [dataApi.reducerPath]: dataApi.reducer,

    counter: counterReducer,
    heroText: heroTextReducer,
    language: languageReducer,
    curtain: curtainReducer,
    cv: cvReducer,
    testimonial: testimonialReducer,
    pageTransition: pageTransitionReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});