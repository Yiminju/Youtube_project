import { formatAgo } from "../util/date"; // 날짜 포맷팅 유틸리티
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet; // 비디오 정보 추출
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } }); // 비디오 상세 페이지로 이동
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title}></img>
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
