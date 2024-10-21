interface TabItemProps {
  activeTab?: string;
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}

const TabItem = ({ label, icon: Icon, onClick, activeTab }: TabItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center
       items-center hover:scale-110 duration-500 ease-out w-fit p-2
       ${activeTab === label ? "border-b-primary border-b-4" : null}
       `}
    >
      <Icon
        className={`${activeTab === label ? "text-primary" : "text-secondary"}`}
      />
      <p
        className={`uppercase ${
          activeTab === label ? "text-primary" : "text-secondary"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

export default TabItem;
