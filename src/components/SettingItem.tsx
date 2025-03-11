import { ArrowRight2 } from "iconsax-react";
import React, { ReactNode } from "react";

const SettingItem = ({
  name,
  icon,
  itemClassName,
  disableEndIcon,
}: {
  name: string;
  icon: ReactNode;
  itemClassName?: string;
  disableEndIcon?: boolean,
}) => {
  return (
    <div
      className={`bg-card-background p-4 flex items-center gap-4 cursor-pointer flex-1 ${itemClassName}`}
    >
      <div>{icon}</div>
      <div className={`text-[15px] font-light flex-1`}>{name}</div>
      {!disableEndIcon &&
        <div>
          <ArrowRight2 color="#000" size={24} />
        </div>
      }
    </div>
  );
};

export default SettingItem;
