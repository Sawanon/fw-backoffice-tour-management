import ContentFormDialog from "@/components/ContentFormDialog";
import SettingItem from "@/components/SettingItem";
import { ArrowLeft2 } from "iconsax-react";
import { Compass, Computer, Info, Lock, LogOut } from "lucide-react";
import { Link } from 'react-router'

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
        <ContentFormDialog>
          <div>
            <SettingItem
              name={`Help Center`}
              icon={<Info color="#000" size={24} />}
              itemClassName={`rounded-t-[20px]`}
            />
          </div>
        </ContentFormDialog>
        <ContentFormDialog>
          <div>
            <SettingItem
              name={`Terms of Use`}
              icon={<Compass color="#000" size={24} />}
              itemClassName={``}
            />
          </div>
        </ContentFormDialog>
        <ContentFormDialog>
          <div>
            <SettingItem
              name={`Privacy Policys`}
              icon={<Lock color="#000" size={24} />}
              itemClassName={``}
            />
          </div>
        </ContentFormDialog>
        <ContentFormDialog>
          <div>
            <SettingItem
              name={`Version 1.000.001`}
              icon={<Computer color="#000" size={24} />}
              itemClassName={``}
            />
          </div>
        </ContentFormDialog>
        <Link to={`/login`}>
          <SettingItem
            name={`Logout`}
            icon={<LogOut color="#000" size={24} />}
            itemClassName={`rounded-b-[20px]`}
            disableEndIcon
          />
        </Link>
        {/* setting items */}
      </div>
      {/* setting content */}
    </div>
  );
};

export default Setting;
