import { Edit2, Flag, Location } from "iconsax-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TourCard = ({
  onEdit,
}:{
  onEdit: () => void,
}) => {

  const handleOnEdit = () => {
    onEdit()
  }
  return (
    <div
      className={`flex bg-card-background min-w-[410px] rounded-[10px] overflow-hidden`}
    >
      <div className={`flex-1 p-4`}>
        <div className={`text-xl font-light`}>Issara Liveaboard</div>
        <div className={`flex gap-4 mt-4`}>
          <div className={`flex gap-1 items-center`}>
            <Location size={16} color="#000" />
            <div className={`text-xs font-light`}>Thailand</div>
          </div>
          <div className={`flex gap-1 items-center`}>
            <Flag size={16} color="#000" />
            <div className={`text-xs font-light`}>Liveaboard</div>
          </div>
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

export default TourCard;
