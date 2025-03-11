import { Edit, Edit2, Trash } from 'iconsax-react'
import React from 'react'
import AddPackageDialog from './AddPackageDialog'

const PackageCard = ({
  className,
}:{
  className?: string,
}) => {
  return (
    <div className={`flex gap-4 ${className ?? ``}`}>
      {/* image & status */}
      <div className={`text-center`}>
        <div className={`bg-gray-100 w-[168px] h-[120px] rounded-[10px]`}></div>
        <div className={`text-[15px] font-light text-verify`}>available 10</div>
      </div>
      {/* image & status */}
      {/* right container content */}
      <div className={`flex flex-col gap-2 flex-1`}>
        {/* title & icon action */}
        <div className={`flex flex-1`}>
          {/* title */}
          <div className={`flex-1`}>
            <div className={`text-[15px] font-light`}>
              Lower Deck - Twin bed
            </div>
            <div className={`text-[10px] text-placeholder font-light mt-3`}>
              you have any questions or need assistance, please let us know
            </div>
          </div>
          {/* title */}
          {/* icon action & special deal */}
          <div className={`flex flex-col justify-between`}>
            {/* icon action */}
            <div className={`flex gap-2 justify-end`}>
              <div className={`cursor-pointer`}>
                <Trash color='#EA4335' size={24} />
              </div>
              <AddPackageDialog>
                <div className={`cursor-pointer`}>
                  <Edit color='#000' size={24} />
                </div>
              </AddPackageDialog>
            </div>
            {/* icon action */}
            {/* special deal */}
            <div className={`text-schedule-button text-[13px] italic`}>
              -40% Special Deal
            </div>
            {/* special deal */}
          </div>
          {/* icon action & special deal */}
        </div>
        {/* title & icon action */}
        {/* og price && real price */}
        <div className={`flex justify-end gap-2`}>
          <div className={`text-[15px] text-placeholder italic line-through`}>
            $ 12,000
          </div>
          <div className={`text-[15px] font-light`}>
            $ 12,000 / Person
          </div>
        </div>
        {/* og price && real price */}
      </div>
      {/* right container content */}
    </div>
  )
}

export default PackageCard