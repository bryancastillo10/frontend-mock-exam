import { ReactNode } from "react";
interface TabContainerProps {
  children: ReactNode;
}

const TabContainer = ({ children }: TabContainerProps) => {
  return (
    <section className="flex items-center gap-2 overflow-x-scroll overflow-y-clip">
      {children}
    </section>
  );
};

export default TabContainer;
