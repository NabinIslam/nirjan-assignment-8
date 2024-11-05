const TabContent = ({ children, isActive }) => {
  return isActive ? <div className="p-4">{children}</div> : null;
};
export default TabContent;
