import { Outlet } from "react-router-dom"; // React Router DOM의 Outlet 컴포넌트
import "./App.css"; // CSS 스타일 파일
import SearchHeader from "./components/SearchHeader"; // 검색 헤더 컴포넌트
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // React Query 관련
import { YoutubeApiProvider } from "./context/YoutubeApiContext"; // 유튜브 API 프로바이더

const queryClient = new QueryClient(); // React Query 클라이언트 인스턴스 생성

function App() {
  return (
    <>
      {/* 검색 헤더 컴포넌트 */}
      <SearchHeader />
      {/* 유튜브 API 컨텍스트 프로바이더 
      Youtube API Provider로 Context를 설정*/}
      <YoutubeApiProvider>
        {/* QueryClientProvider로 React Query 사용 설정 */}
        <QueryClientProvider client={queryClient}>
          {/* Outlet을 통해 하위 라우트 컴포넌트를 렌더링 */}
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
