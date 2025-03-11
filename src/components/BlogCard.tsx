import { Edit2, Flag, Location } from "iconsax-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BlogCard = ({
  onEdit,
  className,
}:{
  onEdit: () => void,
  className?: string,
}) => {

  const handleOnEdit = () => {
    onEdit()
  }
  return (
    <div
      className={`flex bg-card-background min-w-[410px] rounded-[10px] overflow-hidden ${className ?? ``}`}
    >
      <div className={`flex-1 p-4`}>
        <div className={`text-xl font-light`}>Title</div>
        <div className={`flex gap-4 mt-4 text-xs text-placeholder`}>
          If you have any questions or need assistance, please let us know "Inquire about information" “Book a diving trip"
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={`bg-action-button min-w-12 flex items-center justify-center cursor-pointer h-full`}
          >
            <Edit2 color="#000" size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleOnEdit}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BlogCard;
