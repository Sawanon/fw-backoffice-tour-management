import { AddCircle } from 'iconsax-react'
import React from 'react'
import { SearchInput } from '../components/SearchInput'
import TourCard from '../components/TourCard'
import AddTourForm from '../components/AddTourForm'
import EditTourForm from '@/components/EditTourForm'
import ScheduleManagement from '@/components/ScheduleManagement'

const Tour = () => {
  const [mode, setMode] = React.useState<'default' | 'add' | 'edit'>('default')
  const [isManageSchedule, setIsManageSchedule] = React.useState(false)

  const handleOpenSchedule = () => {
    setIsManageSchedule(true)
  }

  const handleCloseSchedule = () => {
    setIsManageSchedule(false)
  }

  const renderMode = () => {
    switch (mode) {
      case 'default':
        return <></>
      case 'add':
        return <AddTourForm />
      case 'edit':
        return (
        <EditTourForm
          onClickSchedule={handleOpenSchedule} 
        />
        )
    }
  }

  const handleOnClickAdd = () => {
    setMode('add')
  }

  const handleOnClickEdit = () => {
    setMode('edit')
  }
  return (
    <div className={`w-full flex`}>
      {isManageSchedule
      ?
        <ScheduleManagement
          onClickBack={handleCloseSchedule}
        />
      :
        <div className={`flex gap-8 w-full`}>
          {/* left container */}
          <div className={`min-w-[410px] pl-[42px] pt-[38px]`}>
            {/* header */}
            <div className={`flex items-center`}>
              <div className={`uppercase text-xl font-light flex-1`}>
                TOUR
              </div>
              <div className={`cursor-pointer`} onClick={handleOnClickAdd}>
                <AddCircle color='#000' size={24} />
              </div>
            </div>
            {/* header */}
            <div className={`mt-7`}>
              <SearchInput
                placeholder={`Search name or email`}
              />
            </div>
            <div className={`mt-4 space-y-4`}>
              <TourCard
                onEdit={() => {
                  handleOnClickEdit()
                }}
              />
              <TourCard
                onEdit={() => {
                  handleOnClickEdit()
                }}
              />
            </div>
          </div>
          {/* left container */}
          {/* right container */}
          <div className={`flex-1 overflow-y-auto pt-[38px] pr-[42px] pb-4`}>
            {renderMode()}
          </div>
          {/* right container */}
        </div>
      }
    </div>
  )
}

export default Tour