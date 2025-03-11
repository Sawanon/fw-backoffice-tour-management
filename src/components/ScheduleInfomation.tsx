import { AddCircle, ArrowLeft, ArrowRight, DocumentText, DollarCircle, Export, Text } from 'iconsax-react'
import React from 'react'
import AddGroupDialog from './AddGroupDialog'
import AddTourInfomationDialog from './AddTourInfomationDialog'
import ContentFormDialog from './ContentFormDialog'
import TourInfomationItem from './TourInfomationItem'
import { Currency } from 'lucide-react'

const ScheduleInfomation = () => {
  return (
    <div>
      <div className={`flex items-center`}>
        <div className={`text-3xl font-light flex-1`}>
          SCHEDULE INFORMATION
        </div>
        <AddGroupDialog>
          <div className={`cursor-pointer`}>
            <AddCircle size={24} color='#000' />
          </div>
        </AddGroupDialog>
      </div>
      {/* schedule infomation items */}
      <div className={`mt-7 space-y-6`}>
        <div>
          {/* group name */}
          <div className={`flex items-center`}>
            <div className={`text-xl font-light flex-1`}>
              Overview
            </div>
            <AddTourInfomationDialog>
              <div className={`cursor-pointer`}>
                <AddCircle size={24} color='#000' />
              </div>
            </AddTourInfomationDialog>
          </div>
          {/* group name */}
          {/* item in group */}
          <div className={`mt-4 divide-y divide-white`}>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Title`}
                  icon={<Text color="#000" size={24} />}
                  itemClassName={`rounded-t-[20px]`}
                />
              </div>
            </ContentFormDialog>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Description`}
                  icon={<DocumentText color="#000" size={24} />}
                  itemClassName={``}
                />
              </div>
            </ContentFormDialog>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Price & Package`}
                  icon={<DollarCircle color="#000" size={24} />}
                  itemClassName={`rounded-b-[20px]`}
                />
              </div>
            </ContentFormDialog>
          </div>
          {/* item in group */}
        </div>
        <div>
          {/* group name */}
          <div className={`flex items-center`}>
            <div className={`text-xl font-light flex-1`}>
              Optional
            </div>
            <AddTourInfomationDialog>
              <div className={`cursor-pointer`}>
                <AddCircle size={24} color='#000' />
              </div>
            </AddTourInfomationDialog>
          </div>
          {/* group name */}
          {/* item in group */}
          <div className={`mt-4 divide-y divide-white`}>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Include`}
                  icon={<ArrowLeft color="#000" size={24} />}
                  itemClassName={`rounded-t-[20px]`}
                />
              </div>
            </ContentFormDialog>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Exclude`}
                  icon={<ArrowRight color="#000" size={24} />}
                  itemClassName={``}
                />
              </div>
            </ContentFormDialog>
            <ContentFormDialog>
              <div>
                <TourInfomationItem
                  name={`Extra`}
                  icon={<Export color="#000" size={24} />}
                  itemClassName={`rounded-b-[20px]`}
                />
              </div>
            </ContentFormDialog>
          </div>
          {/* item in group */}
        </div>
      </div>
      {/* schedule infomation items */}
    </div>
  )
}

export default ScheduleInfomation