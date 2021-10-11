import { Provider } from "react-redux";
import AppWithHook from "./AppWithHook";
import CC from "./CC";
import { store } from "./store";


export const ReduxPrac = () => {
  return <Provider store={store}>
    <CC />
    <AppWithHook />
  </Provider>
};
