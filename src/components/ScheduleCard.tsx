import { Edit2 } from 'iconsax-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ScheduleCard = ({
  onEdit,
  isPromotion
}:{
  onEdit: () => void,
  isPromotion?: boolean
}) => {

  const handleOnEdit = () => {
    onEdit()
  }

  return (
    <div className={`bg-card-background flex rounded-[10px] overflow-hidden`}>
      <div className={`flex-1 p-4 flex`}>
        <div className={`flex-1`}>
          <div className={`text-[15px] font-light`}>
            01 Mar 2025
          </div>
          <div className={`text-[10px] font-light flex gap-2 mt-4`}>
            <div>North Andaman</div>
            <div>8D/7N</div>
            <div>20Dives</div>
          </div>
          {isPromotion &&
            <div className={`rounded-[10px] text-[8px] bg-none-verify text-white w-max px-2 py-1 mt-2`}>
              Promotion
            </div>
          }
        </div>
        <div>
          <div className={`text-[15px] font-light`}>
            $2,300
          </div>
          <div className={`text-verify text-[10px] font-light mt-4`}>
            available
          </div>
        </div>
      </div>
      {/* <div className={`bg-action-button py-4 px-2 flex justify-center items-center`}>
        <Edit2 size={24} color='#000' />
      </div> */}
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
  )
}

export default ScheduleCard