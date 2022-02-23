import * as HIconsOutLine from "@heroicons/react/outline";
import * as HIconsSolid from "@heroicons/react/solid";
import clsx from "clsx";

export const HeroIcon: React.FC<{
  icon: string;
  active?: boolean;
  callBack?: () => void;
  className?: string;
}> = ({ icon, active = false, callBack = () => {}, className }) => {
  const { ...iconsOutline } = HIconsOutLine;
  const { ...iconsSolid } = HIconsSolid;

  // turn first letter to uppercase
  let iconName =
    icon
      .split("-")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join("") + "Icon";

  // @ts-ignore
  let TheIcon: JSX.Element;
  if (active) {
    TheIcon = iconsSolid[iconName];
  } else {
    TheIcon = iconsOutline[iconName];
  }

  return (
    <>
      {/* @ts-ignore */}
      <button
        onClick={() => {
          callBack();
        }}
        className={clsx("rounded-full p-1", className)}
      >
        <TheIcon role="button" className="h-6 w-6 " />
      </button>
    </>
  );
};

// export const ToggleIcon: React.FC<{
//   active: boolean;
//   icon: string;
//   className: string;
// }> = ({ active, icon, className }) => {
//   return (
//     <>
//       <HeroIcon icon={icon} active={active} className={className}></HeroIcon>
//     </>
//   );
// };
