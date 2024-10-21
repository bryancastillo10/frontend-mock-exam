import { ReactNode } from "react";
interface TabContainerProps {
  position?: "top" | "bottom";
  children: ReactNode;
}

const TabContainer = ({ children, position = "top" }: TabContainerProps) => {
  return (
    <section
      className={`flex items-center gap-2 overflow-x-scroll
         overflow-y-clip bg-white xl:w-[388px] 
      ${
        position === "bottom"
          ? "justify-center fixed bottom-0 z-10 border shadow-md border-t-secondary"
          : "justify-start"
      }
    `}
    >
      {children}
    </section>
  );
};

export default TabContainer;
