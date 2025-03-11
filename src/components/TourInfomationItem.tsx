import { ArrowRight2, Trash } from "iconsax-react";
import React, { ReactNode } from "react";

const TourInfomationItem = ({
  name,
  icon,
  itemClassName,
}:{
  name: string,
  icon: ReactNode,
  itemClassName?: string,
}) => {
  return (
    <div className={`flex items-center gap-4`}>
      <div
        className={`bg-card-background p-4 flex items-center gap-4 cursor-pointer flex-1 ${itemClassName}`}
      >
        <div>
          {icon}
        </div>
        <div className={`text-[15px] font-light flex-1`}>{name}</div>
        <div>
          <ArrowRight2 color="#000" size={24} />
        </div>
      </div>
      <div>
        <Trash color="#ea4335" size={24} />
      </div>
    </div>
  );
};

export default TourInfomationItem;
