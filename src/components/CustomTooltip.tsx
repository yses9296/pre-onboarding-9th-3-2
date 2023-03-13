const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const targetData = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "white",
          color: "#333",
          boxShadow: "0 3px 14px rgb(0 0 0 / 40%)",
          padding: "1px",
          textAlign: "left",
          borderRadius: "6px",
        }}
      >
        <div style={{ margin: " 13px 19px" }}>
          <p>Date: {label}</p>
          <p>ID: {targetData.id}</p>
          <p>Area: {targetData.value_area}</p>
          <p>Bar: {targetData.value_bar}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
/** */
