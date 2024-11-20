import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "@nutui/nutui-react/dist/style.css";
import '@/styles/global.scss'
import router from "./router";
import store from "./store";
import GlobalLoading from "./components/loading";

const root = createRoot(document.getElementById("app")!);

root.render(
  <Provider store={store}>
    <Suspense fallback={<GlobalLoading/>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
