interface KeywordTagsProps {
  keywords: string[];
}

const KeywordTags = ({ keywords }: KeywordTagsProps) => {
  return (
    <div style={{ margin: "0.5rem 0", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {keywords.map((keyword, index) => (
        <span
          key={index}
          style={{
            backgroundColor: "#F0F1FE",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
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
