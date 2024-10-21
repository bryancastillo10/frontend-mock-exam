import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <main className="font-poppins flex justify-center ">
      <section className="w-full xl:w-[390px] border border-black">
        {children}
      </section>
    </main>
  );
};

export default Container;
