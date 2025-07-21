import KeywordTags from "../etc/KeywordTags";
import GrabHandle from "/src/assets/images/GrabHandle.svg?react";
import BookmarkButton from "../button/BookmarkButton";

interface Props {
    name: string;
    distanceText: string;
    address: string;
    images: string[];
    keywords: string[];
}

const CafeDetailCard = ({ name, distanceText, address, images, keywords }: Props) => {
    const imagesToShow = images.slice(0, 3);

    return (
        <div
            style={{
                width: "100%", 
                height: "15.75rem",
                padding: "1.5rem 1.5rem 1.5rem", // 40px top, 24px sides, 16px bottom
                backgroundColor: "#fff",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                boxSizing: "border-box",
                position: "relative",
            }}
        >
            <GrabHandle
                style={{
                width: "2rem", // 32px
                height: "0.5rem",
                borderRadius: "0.25rem", // 4px
                position: "absolute",
                top: "0.75rem", // 12px
                left: "50%",
                transform: "translateX(-50%)",
                }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>{name}</span>
                    <span
                        style={{
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        color: "#A8A8A8",
                        }}
                    >
                        {distanceText}
                    </span>
                </div>

                <div>
                    <BookmarkButton size="sm" />
                </div>
            </div>

            <div style={{ fontSize: "0.875rem", fontWeight: 400, color: "#7F7F7F", marginTop: "0.25rem" }}>
                {address}
            </div>

            {imagesToShow.length > 0 ? (
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
                    {imagesToShow.map((src, i) => (
                        <img
                        key={i}
                        src={src}
                        alt={`카페 이미지 ${i + 1}`}
                        style={{
                            width: "6.875rem", // 110px
                            height: "6.875rem",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                        }}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ height: "6.875rem", marginTop: "0.75rem" }} />
            )}

            <KeywordTags keywords={keywords} />
        </div>
    );
};

export default CafeDetailCard;
