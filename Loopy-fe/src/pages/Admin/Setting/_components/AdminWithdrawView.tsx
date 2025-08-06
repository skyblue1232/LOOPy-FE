import { useState } from "react";
import CommonAdminButton from "../../../../components/admin/button/CommonAdminButton";

const AdminWithdrawView = () => {
  const [agree, setAgree] = useState(false); 
  const isValid = agree; 

  const handleWithdraw = () => {
    if (!agree) return;
    console.log("회원탈퇴 요청 전송됨");
  };

  return (
    <div className="max-w-[454px] mt-[0.5rem]">
      <h2 className="text-[1.25rem] font-bold leading-[1.6]">
        회원탈퇴를 신청하기 전에 <br /> 안내사항을 꼭 확인해주세요
      </h2>

      <ul className="mt-[2.5rem] list-decimal list-inside space-y-6 text-[1rem] text-[#252525] leading-relaxed">
        <li>탈퇴 시 해당 계정으로 Loopy 서비스를 더 이상 사용할 수 없습니다.</li>
        <li>
          모든 권리와 데이터가 영구적으로 삭제됩니다.
          <p className="text-[#7F7F7F] text-[0.875rem] mt-1 ml-4">
            * 삭제된 데이터 및 정보는 이후 기존 또는 신규 계정으로 복구가 불가능합니다.
            <br />
            * 필요한 데이터는 반드시 백업해주세요.
          </p>
        </li>
        <li>해당 계정으로 루피에 재가입한 경우, 새로운 계정으로 간주됩니다.</li>
      </ul>

      <div className="bottom-[2rem]">
        <CommonAdminButton
          label="회원탈퇴하기"
          onClick={handleWithdraw}
          onToggleAgree={() => setAgree((prev) => !prev)} 
          agree={isValid}
          showCheckText
          disabled={!agree}
        />
      </div>
    </div>
  );
};

export default AdminWithdrawView;
