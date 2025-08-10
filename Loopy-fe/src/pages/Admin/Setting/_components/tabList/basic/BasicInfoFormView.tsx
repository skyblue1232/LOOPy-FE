import type { ChangeEvent } from "react";
import CommonInput from "../../../../../../components/input/CommonInput";
import PhotoUploader from "./PhotoUploader";
import DescriptionArea from "./DescriptionArea";
import SNSInput from "./SNSInput";
import PhoneInput from "./PhoneInput";
import CommonAdminButton from "../../../../../../components/admin/button/CommonAdminButton";
import AddressSearchField from "./AddressSearchField";

type Form = {
  storeName: string;
  ownerName: string;
  address: string;
  detailAddress: string;
  phone: string;
  sns: string;
  description: string;
  photos: File[];
};

interface Props {
  form: Form;
  setField: <K extends keyof Form>(key: K) => (v: Form[K]) => void;
  commit: () => Promise<void> | void;
  isValid: boolean;
  isSubmitting: boolean;
  maxPhotos: number;
  minPhotos: number;
}

const BasicInfoFormView = ({
  form, setField, commit, isValid,
  isSubmitting, maxPhotos, minPhotos
}: Props) => {
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const merged = [...form.photos, ...Array.from(e.target.files)].slice(0, maxPhotos);
    setField("photos")(merged);
    e.target.value = "";
  };

  const handlePhotoDelete = (idx: number) => {
    setField("photos")(form.photos.filter((_, i) => i !== idx));
  };

  const setExtra = setField as unknown as (
    key:
      | "region1DepthName"
      | "region2DepthName"
      | "region3DepthName"
      | "latitude"
      | "longitude"
  ) => (v: any) => void;

  return (
    <div className="flex flex-col gap-8">
      <div className="font-bold text-[1.25rem] mb-2">우리 매장의 기본정보를 입력해주세요</div>

      <div>
        <div className="font-semibold text-[1rem] mb-2">업체명</div>
        <CommonInput
          placeholder="업체명을 입력해주세요"
          value={form.storeName}
          onChange={(e) => setField("storeName")(e.target.value)}
        />
      </div>

      <div>
        <div className="font-semibold text-[1rem] mb-2">대표자</div>
        <CommonInput
          placeholder="대표자명을 입력해주세요"
          value={form.ownerName}
          onChange={(e) => setField("ownerName")(e.target.value)}
        />
      </div>

      <AddressSearchField
        address={form.address}
        setAddress={setField("address")}
        detailAddress={form.detailAddress}
        setDetailAddress={setField("detailAddress")}
        onPick={(p) => {
          setField("address")(p.address);
          // ✅ region/좌표는 any 캐스팅으로 반영
          setExtra("region1DepthName")(p.region1DepthName);
          setExtra("region2DepthName")(p.region2DepthName);
          setExtra("region3DepthName")(p.region3DepthName);
          setExtra("latitude")(p.latitude);
          setExtra("longitude")(p.longitude);
        }}
      />

      <div>
        <div className="font-semibold text-[1rem] mb-2">전화번호</div>
        <PhoneInput value={form.phone} onChange={(raw) => setField("phone")(raw)} />
      </div>

      <PhotoUploader
        photos={form.photos}
        maxPhotos={maxPhotos}
        minPhotos={minPhotos}
        onChange={handlePhotoChange}
        onDelete={handlePhotoDelete}
      />

      <DescriptionArea
        value={form.description}
        onChange={(e) => setField("description")(e.target.value)}
      />

      <SNSInput
        value={form.sns}
        onChange={(e) => setField("sns")(e.target.value)}
      />

      <CommonAdminButton
        label="수정 완료하기"
        disabled={!isValid || isSubmitting}
        onClick={() => void commit()}
      />
    </div>
  );
};

export default BasicInfoFormView;
