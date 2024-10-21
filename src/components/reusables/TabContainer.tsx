import { ReactNode } from "react";
interface TabContainerProps {
  position?: "top" | "bottom";
  children: ReactNode;
}

const TabContainer = ({ children, position = "top" }: TabContainerProps) => {
  return (
    <section
      className={`flex items-center gap-2 overflow-x-scroll overflow-y-clip
      ${position === "bottom" ? "justify-center" : "justify-start"}
    `}
    >
      {children}
    </section>
  );
};

export default TabContainer;
