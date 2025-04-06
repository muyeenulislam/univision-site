const Spacer = ({ height = 0, width = 0 }) => {
  const convertToEm = (value) => {
    if (typeof value === "string") {
      if (value.includes("em")) {
        return value;
      }
      if (value.includes("px")) {
        return `${parseFloat(value) / 16}em`;
      }
    }
    if (typeof value === "number") {
      return `${value / 16}em`;
    }
    return "0em";
  };

  return (
    <div
      style={{ height: convertToEm(height), width: convertToEm(width) }}
    ></div>
  );
};

export default Spacer;
