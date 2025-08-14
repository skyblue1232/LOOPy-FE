interface StatItemProps {
  label: string;
  value: string;
  border?: boolean;
}

export const StatItem = ({ label, value, border }: StatItemProps) => (
  <div
    className={`flex-1 flex items-center justify-center py-[1rem] border-t border-b border-[#DFDFDF] gap-[1rem] ${
      border ? "border-l" : ""
    }`}
  >
    <p className="text-[0.875rem] font-semibold">{label}</p>
    <p className="text-[#6970F3] font-bold text-[1.125rem]">{value}</p>
  </div>
);
