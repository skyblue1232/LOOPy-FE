import type { ChangeEvent } from "react";
import CameraPlus from "../../../../../../assets/images/CameraPlus.svg?react"

interface PhotoUploaderProps {
  photos: File[];
  maxPhotos: number;
  minPhotos: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (idx: number) => void;
}

const PhotoUploader = ({
  photos,
  maxPhotos,
  minPhotos,
  onChange,
  onDelete,
}: PhotoUploaderProps) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-[1rem]">사진 첨부</span>
      <span className="font-semibold text-[1rem]">
        <span className="text-[#6970F3]">{photos.length}</span>
        <span className="text-[#7F7F7F]">/{maxPhotos}</span>
      </span>
    </div>
    <div className="font-normal text-[0.875rem] text-[#7F7F7F] mb-[1rem]">
      최소 {minPhotos}개 이상의 사진을 첨부해주세요
    </div>
    <div className="flex gap-2">
      {photos.length < maxPhotos && (
        <label className="w-[6.375rem] h-[6.375rem] flex items-center justify-center border border-[#DFDFDF] border-dashed rounded-[8px] bg-[#F3F3F3] cursor-pointer"
          style={{
            borderWidth: '1.5px',
            borderStyle: 'dashed',
            borderColor: '#DFDFDF',
            borderRadius: '8px',
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={onChange}
          />
          <CameraPlus />
        </label>
      )}
      {photos.map((file, idx) => (
        <div
          key={idx}
          className="w-[6.375rem] h-[6.375rem] relative rounded-[8px] overflow-hidden flex-shrink-0"
        >
          <img
            src={URL.createObjectURL(file)}
            alt={`첨부사진${idx + 1}`}
            className="object-cover w-full h-full"
          />
          <button
            type="button"
            className="absolute top-1 right-1 bg-[#6970F3] text-white rounded-full w-5 h-5 flex items-center justify-center text-[0.75rem]"
            onClick={() => onDelete(idx)}
            aria-label="삭제"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default PhotoUploader;
