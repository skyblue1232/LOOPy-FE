import { useRef, useEffect } from 'react';

interface NotificationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
}

const NotificationInput: React.FC<NotificationInputProps> = ({
  value,
  onChange,
  placeholder = '메시지를 입력해주세요.',
  maxLength = 500,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      onChange(newValue);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="w-[34rem] relative">
      <textarea
        ref={textareaRef}
        className="w-[34rem] bg-[#F3F3F3] rounded-md p-4 pr-16 resize-none focus:outline-none min-h-[11.5rem] overflow-hidden"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div className="absolute bottom-4 right-4 text-[#7F7F7F]">
        <span className="font-extrabold text-[#252525] text-[1rem]">
          {value.length}
        </span>{' '}
        / <span className="text-[#7F7F7F]">{maxLength}</span>
      </div>
    </div>
  );
};

export default NotificationInput;
