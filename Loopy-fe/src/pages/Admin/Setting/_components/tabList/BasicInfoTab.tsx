import { useState } from "react";
import type { ChangeEvent } from "react";
import CommonInput from "../../../../../components/input/CommonInput";
import PhotoUploader from "./basic/PhotoUploader";
import DescriptionArea from "./basic/DescriptionArea";
import SNSInput from "./basic/SNSInput";
import PhoneInput from "./basic/PhoneInput";
import CommonAdminButton from "../../../../../components/admin/button/CommonAdminButton";

const BasicInfoTab = () => {
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [sns, setSNS] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const maxPhotos = 5;
  const minPhotos = 3;

  const isFormValid =
    !!storeName.trim() &&
    !!ownerName.trim() &&
    !!address.trim() &&
    !!detailAddress.trim() &&
    phone.length === 11 &&
    photos.length >= minPhotos &&
    !!description.trim();

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileArr = Array.from(e.target.files);
    const total = photos.length + fileArr.length;
    if (total > maxPhotos) {
      setPhotos(prev => [...prev, ...fileArr.slice(0, maxPhotos - prev.length)]);
    } else {
      setPhotos(prev => [...prev, ...fileArr]);
    }
    e.target.value = "";
  };

  const handlePhotoDelete = (idx: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="font-bold text-[1.25rem] mb-2">우리 매장의 기본정보를 입력해주세요</div>
      <div>
        <div className="font-semibold text-[1rem] mb-2">업체명</div>
        <CommonInput
          placeholder="업체명을 입력해주세요"
          value={storeName}
          onChange={e => setStoreName(e.target.value)}
        />
      </div>
      <div>
        <div className="font-semibold text-[1rem] mb-2">대표자</div>
        <CommonInput
          placeholder="대표자명을 입력해주세요"
          value={ownerName}
          onChange={e => setOwnerName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-[1rem] mb-2">주소</div>
        <div className="flex gap-2 justify-center items-center">
          <div className="flex-[77_0_0%]">
            <CommonInput
              placeholder="주소를 입력해주세요"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="flex-[23_0_0%] h-[3.375rem] py-0 bg-[#6970F3] text-white rounded-[8px] text-[0.875rem] py-[0.5rem] font-semibold"
            // 주소 검색 이벤트 연결
          >
            주소 검색하기
          </button>
        </div>
        <CommonInput
          placeholder="상세 주소를 입력해주세요"
          value={detailAddress}
          onChange={e => setDetailAddress(e.target.value)}
        />
      </div>
      <div>
        <div className="font-semibold text-[1rem] mb-2">전화번호</div>
        <PhoneInput value={phone} onChange={setPhone} />
      </div>
      <PhotoUploader
        photos={photos}
        maxPhotos={maxPhotos}
        minPhotos={minPhotos}
        onChange={handlePhotoChange}
        onDelete={handlePhotoDelete}
      />
      <DescriptionArea
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <SNSInput value={sns} onChange={e => setSNS(e.target.value)} />

      <CommonAdminButton
        label="수정하기"
        disabled={!isFormValid}
      />
    </div>
  );
};

export default BasicInfoTab;
