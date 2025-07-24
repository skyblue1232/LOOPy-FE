interface KeywordTagsProps {
  keywords: string[];
}

const KeywordTags = ({ keywords }: KeywordTagsProps) => {
  return (
    <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
      {keywords.map((keyword, index) => (
        <span
          key={index}
          style={{
            backgroundColor: "#F0F1FE",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
            color: "#6970F3",
          }}
        >
          #{keyword}
        </span>
      ))}
    </div>
  );
};

export default KeywordTags;
