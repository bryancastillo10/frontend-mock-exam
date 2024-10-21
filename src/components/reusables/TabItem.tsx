interface TabItemProps {
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
}

const TabItem = ({ label, icon: Icon, onClick }: TabItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center hover:scale-110 duration-500 ease-out w-fit p-2"
    >
      <Icon className=" text-secondary" />
      <p className="uppercase text-secondary">{label}</p>
    </button>
  );
};

export default TabItem;
