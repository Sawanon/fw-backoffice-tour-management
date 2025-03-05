import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComp = ({
  className = "",
}:{
  className?: string,
}) => {
  return (
    <div className={``}>
      <Select>
        <SelectTrigger className={`min-w-[410px] border border-border-input h-[52px] ${className}`}>
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComp;
