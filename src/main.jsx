import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Videos from "./pages/Videos.jsx";
import VideoDetail from "./pages/VideoDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      // index(기본 경로를 의미)가 최상위 "/"인 경우
      { index: true, element: <Videos /> },
      // index가 Videos인 경우
      { path: "Videos", element: <Videos /> },
      // index가 Videos에 파라미터가 keyword인 경우, 그 keyword의 비디오 보여줌
      { path: "Videos/:keyword", element: <Videos /> },
      // index가 Videos/watch/:videoID인 경우
      { path: "Videos/watch/:videoID", element: <VideoDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // 리액트 router가 경로에 따라 선택, 위에서 정의함
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
