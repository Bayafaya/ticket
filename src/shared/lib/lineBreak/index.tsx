export const lineBreak = (text: string) => {
  if (!text) return null;
  return (
    <>
      {text.split("\n").map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
    </>
  );
};
