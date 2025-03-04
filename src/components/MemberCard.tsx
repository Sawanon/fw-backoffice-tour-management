import { User } from "iconsax-react";
import React from "react";

const MemberCard = ({
  isVerify,
}:{
  isVerify: boolean,
}) => {
  return (
    <div
      className={`bg-gray-100 min-w-[410px] p-4 rounded-[10px] flex gap-4 items-center`}
    >
      <div
        className={`rounded-full flex w-max h-max overflow-hidden border-2 border-black`}
      >
        <User color="#000" size={"48px"} />
      </div>
      <div className={`flex-1`}>
        <div className={`font-light text-xl`}>Username</div>
        <div className={`text-border text-[10px] font-light mt-4`}>
          abcd@gmail.com
        </div>
      </div>
      <div>
        {/* date time */}
        <div className={`flex gap-2 font-light text-[10px] italic`}>
          <div>20/01/25</div>
          <div>11:40</div>
        </div>
        {/* date time */}
        {/* status */}
        <div className={`mt-4 text-xs font-light text-center ${isVerify ? 'text-verify' : 'text-none-verify'}`}>
          {isVerify ?  `Verify` : `None Verify`}
        </div>
        {/* status */}
      </div>
    </div>
  );
};

export default MemberCard;
