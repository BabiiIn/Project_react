export const DebugScrollBlock = ({ height = 2000 }) => {
  return (
    <div style={{ height, background: "#f0f0f0" }}>
      <p style={{ padding: "1rem" }}>
        Debug Scroll Block — искусственный контент для проверки прогресс-бара.
      </p>
    </div>
  );
};
