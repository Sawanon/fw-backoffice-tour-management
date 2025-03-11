import { AddCircle, ArrowRight2, Bag, Gallery } from "iconsax-react";
import React from "react";
import TourInfomationItem from "./TourInfomationItem";
import AddTourInfomationDialog from "./AddTourInfomationDialog";
import ContentFormDialog from "./ContentFormDialog";

const TourInfomation = () => {
  const [isOpenAddInfo, setIsOpenAddInfo] = React.useState(false);
  
  const handleOnClickAdd = () => {
    setIsOpenAddInfo(true)
  }
  return (
    <div className={`mt-10`}>
      <div className={`flex items-center`}>
        <div className={`text-xl font-light flex-1`}>Tour Information</div>
        <AddTourInfomationDialog
        >
          <div
            className={`cursor-pointer`}
            onClick={handleOnClickAdd}
          >
            <AddCircle color="#000" size={24} />
          </div>
        </AddTourInfomationDialog>
      </div>
      {/* tour infomation items */}
      <div className={`mt-7 divide-y divide-white`}>
        <ContentFormDialog>
          <div>
            <TourInfomationItem
              name={`Facilities`}
              icon={<Gallery color="#000" size={24} />}
              itemClassName={`rounded-t-[20px]`}
            />
          </div>
        </ContentFormDialog>
        <ContentFormDialog>
          <div>
            <TourInfomationItem
              name={`Food & Drinks`}
              icon={<Bag color="#000" size={24} />}
              itemClassName={`rounded-b-[20px]`}
            />
          </div>
        </ContentFormDialog>
      </div>
      {/* tour infomation items */}
    </div>
  );
};

export default TourInfomation;
