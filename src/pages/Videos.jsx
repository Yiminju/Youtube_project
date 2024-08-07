import { useParams } from "react-router-dom"; // URL 파라미터를 위한 훅
import { useQuery } from "@tanstack/react-query"; // React Query 훅
import VideoCard from "../components/VideoCard"; // 비디오 카드 컴포넌트
import { useYoutubeApi } from "../context/YoutubeApiContext"; // 유튜브 API 컨텍스트 훅

export default function Videos() {
  const { keyword } = useParams(); // URL에서 검색어 추출
  const { youtube } = useYoutubeApi(); // 유튜브 API 컨텍스트 사용
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword], // 쿼리 키
    queryFn: () => youtube.search(keyword), // 검색 함수
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} /> //* 비디오 카드
          ))}
        </ul>
      )}
    </>
  );
}
