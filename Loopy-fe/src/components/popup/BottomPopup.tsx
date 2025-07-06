interface BottomPopupLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const BottomPopupLayout = ({ children, className = "" }: BottomPopupLayoutProps) => {
  return (
    <div
      className={`w-full max-w-[22.6875rem] bg-white rounded-t-[1rem] pt-[2.5rem] px-[1.5rem] pb-[1rem] relative box-border ${className}`}
    >
      {/* Grab Handle */}
      <img
        src="/src/assets/images/GrabHandle.svg"
        alt="드래그 핸들"
        className="w-8 h-2 rounded-[0.25rem] absolute top-[0.75rem] left-1/2 transform -translate-x-1/2"
      />
      {children}
    </div>
  );
};

export default BottomPopupLayout;
