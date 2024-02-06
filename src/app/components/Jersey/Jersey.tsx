const Jersey = () => {
  return (
    <div className="jersey mt-10">
      <div
        className="manga"
        style={{
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 10,
          borderRight: 0,
        }}
      />
      <div className="dorsal" />
      <div
        className="manga"
        style={{
          borderTopRightRadius: 20,
          borderBottomRightRadius: 10,
          borderLeft: 0,
        }}
      />
    </div>
  );
};

export default Jersey;
