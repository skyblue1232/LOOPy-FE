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
    backgroundColor = "#FFFFFF", 
    top = "4.4375rem",   // default: 71px
}: SearchBarProps) => {
    return (
        <div
        style={{
            position: "absolute",
            top,
            left: "1.5rem", // 24px
            right: "1.5rem",
            zIndex: 20,
        }}
        >
        <div
            style={{
            display: "flex",
            alignItems: "center",
            height: "2.625rem", // 42px
            backgroundColor: backgroundColor,
            borderRadius: "0.5rem", // 8px
            padding: "0.5625rem 1rem", // 9px 16px
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            }}
        >
            <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "0.875rem",
                backgroundColor: "transparent",
                fontFamily: "SUIT, sans-serif",
                fontWeight: 400,
                color: "#000000",
            }}
            />
            <img
            src="/src/assets/images/Search.svg"
            alt="검색"
            style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }}
            />
        </div>
        </div>
    );
};

export default SearchBar;