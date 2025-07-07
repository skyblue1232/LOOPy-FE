import React from "react";

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    backgroundColor?: string;
    top?: string;
}

const SearchBar = ({
    value,
    onChange,
    placeholder,
    top = "4.4375rem",   // default: 71px
}: SearchBarProps) => {
    return (
        <div
            className="absolute w-full z-20"
            style={{ top }}
        >
        <div className="flex items-center h-[2.625rem] bg-white rounded-[0.5rem] px-4 py-[0.5625rem] shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-1 border-none outline-none bg-transparent text-[0.875rem] font-normal text-black"
            />
            <img
            src="/src/assets/images/Search.svg"
            alt="검색"
            className="w-4 h-4 ml-2"
            />
        </div>
        </div>
    );
};

export default SearchBar;