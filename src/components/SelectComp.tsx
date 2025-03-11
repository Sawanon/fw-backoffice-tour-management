import { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComp = ({
  className = "",
  endIcon,
  items,
}:{
  className?: string,
  endIcon?: ReactNode,
  items?: string[],
}) => {
  return (
    <div className={``}>
      <Select>
        <SelectTrigger className={`min-w-[410px] border border-border-input h-[52px] ${className}`}>
          <div className={`flex justify-between items-center flex-1`}>
            <SelectValue placeholder="" />
            {endIcon &&
              <div className={``}>
                {endIcon}
              </div>
            }
          </div>
        </SelectTrigger>
          {items ?
          <SelectContent>
            {items.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
          :
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
          }
      </Select>
    </div>
  );
};

export default SelectComp;
