import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/button/CommonButton";
import AddressCard from "./_components/AddressCard";
import CommonHeader from "../../../components/header/CommonHeader";

const dummyDongList = [
    "서대문구 연희동",
    "마포구 합정동",
    "중구 필동",
    "성동구 성수동",
    "용산구 이태원동",
    "강남구 역삼동",
    "강서구 마곡동",
    "강북구 번동",
    "관악구 조원동",
];

const LocationPage = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [selectedDong, setSelectedDong] = useState<string | null>(null);

    return (
        <div className="relative pt-[47px] bg-white min-h-screen">
            <div className="absolute top-[47px] left-0 right-0">
                <CommonHeader title="위치 설정" onBack={() => navigate(-1)} />
            </div>

            <div className="mt-[73px]">
                <div className="h-[48px] px-[1rem] py-[0.75rem] bg-[#F5F5F5] rounded-[0.5rem] flex items-center">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="동까지 입력"
                        className="flex-1 text-[1rem] bg-transparent border-none outline-none"
                    />
                    <img
                        src="/src/assets/images/Search.svg"
                        alt="검색"
                        className="w-4 h-4 ml-2"
                    />
                </div>
            </div>

            <div className="mt-[0.5rem]">
                <button className="w-full h-[48px] rounded-[0.5rem] bg-[#6970F3] text-white text-[0.875rem] font-medium flex justify-center items-center gap-[0.25rem]">
                    <img 
                        src="/src/assets/images/Location.svg"
                        alt="위치 아이콘"
                        className="w-4 h-4"
                    /> 
                    현재 위치로 설정하기
                </button>
            </div>

            <div
                className="relative overflow-y-auto"
                style={{ height: "calc(100vh - 47px - 48px - 26px - 48px - 8px - 172px)" }}
            >
                <div className="pt-[1.5rem]">
                    {dummyDongList.map((dong) => (
                        <AddressCard
                            key={dong}
                            dongName={dong}
                            isSelected={selectedDong === dong}
                            onClick={() =>
                                setSelectedDong((prev) => (prev === dong ? null : dong))
                            }
                        />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[172px] z-10">
                <div className="absolute bottom-[91px] left-0 right-0 h-[81px] bg-gradient-to-t from-white to-transparent" />
                <div className="flex flex-col justify-end h-full pb-[31px]">
                <CommonButton
                    text="저장하기"
                    onClick={() => {
                        console.log("저장:", selectedDong);
                        navigate(-1);
                    }}
                />
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
