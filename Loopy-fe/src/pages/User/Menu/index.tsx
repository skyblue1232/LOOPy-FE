import { useNavigate } from "react-router-dom";
import MenuCard from "../Detail/_components/MenuCard";
import { cafeDetailMock } from "../../../mock/cafeDetailMock";
import CommonHeader from "../../../components/header/CommonHeader";
import MenuCardSkeleton from "./Skeleton/MenuCradSkeleton";
import { useState, useEffect } from "react";

export default function MenuListPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-white min-h-screen">
            <div className="absolute mt-[1.5rem] left-0 right-0 px-[1rem]">
                <CommonHeader title="카페 위니 메뉴" onBack={() => navigate(-1)} />
            </div>

            <div className="absolute mt-[4.5rem] px-[1rem] pb-[2rem]">
                <div className="mt-[2rem] flex flex-col gap-[1.5rem]">
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, idx) => (
                            <MenuCardSkeleton key={idx} />
                        ))
                        : cafeDetailMock.menus?.map((menu, idx) => (
                            <MenuCard key={idx} {...menu} />
                        ))}
                </div>
            </div>
        </div>
    );
}