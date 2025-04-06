const PrimaryButton = ({
  width = "100%",
  maxwidth = "100%",
  text,
  ...props
}) => {
  return (
    <button
      className={`rounded-2xl bg-primary text-white border hover:bg-white hover:text-primary transition-all w-full border-primary py-3 px-6 font-bold text-ellipsis overflow-hidden whitespace-nowrap shadow-md`}
      style={{
        width: width,
        maxWidth: maxwidth,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
