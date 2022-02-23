import clsx from "clsx";

export const Container: React.FC = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

type PageTileProps = {
  text?: string;
};

export const PageTitle: React.FC<PageTileProps> = ({ text }) => {
  return (
    <div className={clsx("bg-blue-300 rounded-lg")}>
      <div className="text-center p-5">{text}</div>
    </div>
  );
};
