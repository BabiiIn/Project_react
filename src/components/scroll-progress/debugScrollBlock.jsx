export const DebugScrollBlock = ({ height = 2000 }) => {
  const isDev = import.meta.env.MODE === 'development';

  if (!isDev) {
    return null;
  }
  return (
    <div
      style={{
        height,
        background: '#f0f0f0',
        marginTop: '1rem',
        border: '1px dashed #ccc',
      }}
    >
      <p style={{ padding: '1rem' }}>
        Тестовый блок высотой {height}px для проверки скролла.
      </p>
    </div>
  );
};
