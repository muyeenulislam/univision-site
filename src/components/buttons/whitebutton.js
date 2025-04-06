const WhiteButton = ({ width = "100%", text, ...props }) => {
  return (
    <button
      className="rounded-2xl border border-primary bg-white hover:bg-primary hover:text-white transition-all w-full max-w-[300px] py-3 px-6 text-primary font-bold text-ellipsis overflow-hidden whitespace-nowrap"
      style={{ width: width }}
      {...props}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
