import SettingItem from "@/components/SettingItem";
import { ArrowLeft2 } from "iconsax-react";
import { Compass, Computer, Info, Lock, LogOut } from "lucide-react";

const Setting = () => {
  return (
    <div className={`px-[42px] py-[38px]`}>
      {/* header */}
      <div className={`flex gap-4 items-center`}>
        <div>
          <ArrowLeft2 color="#000" size={24} />
        </div>
        <div className={`text-xl font-light`}>Setting</div>
      </div>
      {/* header */}
      {/* setting content */}
      <div className={`mt-10 min-w-[410px]`}>
        {/* setting items */}
        <SettingItem
          name={`Help Center`}
          icon={<Info color="#000" size={24} />}
          itemClassName={`rounded-t-[20px]`}
        />
        <SettingItem
          name={`Terms of Use`}
          icon={<Compass color="#000" size={24} />}
          itemClassName={``}
        />
        <SettingItem
          name={`Privacy Policys`}
          icon={<Lock color="#000" size={24} />}
          itemClassName={``}
        />
        <SettingItem
          name={`Version 1.000.001`}
          icon={<Computer color="#000" size={24} />}
          itemClassName={``}
        />
        <SettingItem
          name={`Logout`}
          icon={<LogOut color="#000" size={24} />}
          itemClassName={`rounded-b-[20px]`}
          disableEndIcon
        />
        {/* setting items */}
      </div>
      {/* setting content */}
    </div>
  );
};

export default Setting;
