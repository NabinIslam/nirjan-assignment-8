const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={` px-7 py-2 text-lg font-medium rounded-full border-2 border-white ${
        isActive ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
