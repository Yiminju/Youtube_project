import { useLocation } from "react-router-dom"; // React Router DOM 관련
import ChannelInfo from "../components/ChannelInfo"; // 채널 정보 컴포넌트

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation(); // 이전 페이지에서 전달된 비디오 정보 가져오기
  const { title, channelId, channelTitle, description } = video.snippet; // 비디오 정보 추출

  return (
    <section>
      {/* 유튜브 비디오 iframe */}
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      ></iframe>
      <div>
        <h2 className="font-bold text-3xl mb-4">{title}</h2>
        {/* 채널 정보 */}
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </div>
    </section>
  );
}
