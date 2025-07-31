import { useState } from "react";
import CheckCircle from "../../../Signin/_components/CheckCircle";
import CommonButton from "../../../../../components/button/CommonButton";
import { useKeyboardOpen } from "../../../../../hooks/useKeyboardOpen";
import { usePatchUserInactive } from "../../../../../hooks/mutation/active/useActiveStatus";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../../../components/header/CommonHeader";

interface Props {
  onBack: () => void;
}

const WithdrawAccountView = ({ onBack }: Props) => {
  const [agree, setAgree] = useState(false);
  const isKeyboardOpen = useKeyboardOpen();
  const navigate = useNavigate();

  const { mutate: patchInactive } = usePatchUserInactive(
    () => {
      navigate("/");
    },
    (err) => {
      console.error("휴면 전환 실패", err);
      alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
    }
  );

  const handleWithdraw = () => {
    patchInactive();
  };

  return (
    <>
      <CommonHeader title="계정 관리" onBack={onBack} />
      <div className="flex flex-col pt-[1.5rem]">
        <p className="text-[1.25rem] text-[#323232] font-bold mb-[2.5rem] leading-[150%]">
          회원탈퇴를 신청하기 전에 <br /> 안내사항을 꼭 확인해주세요
        </p>

        <ul className="text-[1rem] font-semibold leading-[150%] text-[#3A3D40] mb-[1.5rem] list-decimal list-inside space-y-[1.5rem]">
          <li>탈퇴 시 해당 계정으로 LOOPy 서비스를 더 이상 사용할 수 없습니다.</li>
          <li>
            모든 권리와 데이터가 영구적으로 삭제됩니다.
            <ul className="mt-[0.875rem] list-inside text-[0.875rem] font-normal text-[#8E9398]">
              <li>• &nbsp;탈퇴 후 회원 정보 및 서비스 이용 기록은 모두 삭제되어 복구가 불가능합니다.</li>
              <li>• &nbsp;삭제된 데이터는 복구되지 않습니다. 필요한 데이터는 미리 백업해주세요.</li>
            </ul>
          </li>
          <li>해당 계정으로 루피에 재가입할 경우, 새로운 계정으로 간주됩니다.</li>
        </ul>

        <div
          className={`absolute left-0 w-full px-[1.5rem] transition-all duration-300 ${
            isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
          }`}
        >
          <div
            className="flex items-center gap-[0.5rem] ml-[0.125rem] mt-[1.5rem] cursor-pointer"
            onClick={() => setAgree((prev) => !prev)}
          >
            <CheckCircle checked={agree} />
            <span className="text-[1rem] text-[#3A3D40] font-normal">
              안내 사항을 모두 확인하였으며, 이에 동의합니다.
            </span>
          </div>

          <CommonButton
            text="회원탈퇴하기"
            onClick={handleWithdraw}
            className={`w-full mt-[1.5rem] ${
              agree
                ? "bg-[#6970F3] text-white"
                : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
            }`}
            disabled={!agree}
          />
        </div>
      </div>
    </>
  );
};

export default WithdrawAccountView;
