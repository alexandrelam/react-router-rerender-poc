import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = React.lazy(() => import("./App"));
const OtherPage = React.lazy(() => import("./OtherPage"));

const AppWrapper = () => {
  const params = useParams();

  return (
    <Suspense fallback={null}>
      <App key={params.slug} basePath="/fix" />
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="fix/:slug" element={<AppWrapper />} />
          <Route path="/:slug?" element={<App basePath="" />} />
          <Route path="/other-page" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

