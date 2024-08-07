import { useEffect, useState } from "react"; // React 훅
import { BsYoutube, BsSearch } from "react-icons/bs"; // 아이콘
import { Link, useNavigate, useParams } from "react-router-dom"; // React Router DOM 관련

export default function SearchHeader() {
  const { keyword } = useParams(); // URL 파라미터에서 keyword 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const [text, setText] = useState(""); // 검색 입력값 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`); // 검색어로 페이지 이동
  };

  // keyword가 변경될 때마다 입력창의 text도 변경
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      {/* 홈으로 이동 */}
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      {/* 검색 입력 폼 */}
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
