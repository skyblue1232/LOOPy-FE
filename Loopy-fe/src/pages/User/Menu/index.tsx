import { useNavigate } from "react-router-dom";
import MenuCard from "../Detail/_components/MenuCard";
import { cafeDetailMock } from "../../../mock/cafeDetailMock";
import CommonHeader from "../../../components/header/CommonHeader";

export default function MenuListPage() {
    const navigate = useNavigate();

    return (
        <div className="relative bg-white min-h-screen">
            <div className="absolute top-[47px] left-0 right-0 px-[1rem]">
                <CommonHeader title="카페 위니 메뉴" onBack={() => navigate(-1)} />
            </div>

            <div className="pt-[4.5rem] px-[1rem] pb-[2rem]">
                <div className="mt-[2rem] flex flex-col gap-[1.5rem]">
                {cafeDetailMock.menus?.map((menu, idx) => (
                    <MenuCard key={idx} {...menu} />
                ))}
                </div>
            </div>
        </div>
    );
}