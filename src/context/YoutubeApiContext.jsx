import { createContext, useContext } from "react"; // React 컨텍스트 관련
import Youtube from "../api/youtube"; // 실제 유튜브 API 클래스 (주석 처리됨)
import Fakeyoutube from "../api/fakeYoutube"; // 가짜 유튜브 API 클래스

export const YoutubeApiContext = createContext(); // 유튜브 API 컨텍스트 생성

const youtube = new Fakeyoutube(); // new Youtube()로 바꾸기 // Fakeyoutube 인스턴스 생성
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext); // 유튜브 API 컨텍스트 훅
}
