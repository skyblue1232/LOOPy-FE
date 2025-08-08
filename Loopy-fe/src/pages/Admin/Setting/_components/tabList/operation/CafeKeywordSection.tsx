const exampleKeywords = [
  "노트북", "애견", "디카페인", "주차 가능", "공유주방", "루프탑", "2시간 무료", "포장 가능", "24시간 운영"
];

const CafeKeywordSection = ({
  keywordList,
  setKeywordList,
}: {
  keywordList: string[];
  setKeywordList: (list: string[]) => void;
}) => (
  <div className="mb-[8rem]">
    <div className="font-semibold text-[1rem] mb-3">카페 키워드</div>
    <div className="flex gap-2 flex-wrap p-6 bg-[#F3F3F3] rounded-[8px]">
      {exampleKeywords.map((keyword) => (
        <button
          key={keyword}
          type="button"
          onClick={() =>
            setKeywordList(
              keywordList.includes(keyword)
                ? keywordList.filter((k) => k !== keyword)
                : [...keywordList, keyword]
            )
          }
          className={`border rounded px-3 py-1 text-[0.95rem] ${
            keywordList.includes(keyword)
              ? "bg-[#6970F3] text-white"
              : "bg-white text-black border-[#A8A8A8]"
          }`}
        >
          {keyword}
        </button>
      ))}
    </div>
  </div>
);

export default CafeKeywordSection;
