import { AddCircle } from 'iconsax-react'
import React from 'react'
import { SearchInput } from '../components/SearchInput'
import TourCard from '../components/TourCard'
import AddTourForm from '../components/AddTourForm'

const Tour = () => {
  return (
    <div className={`flex gap-8 w-full`}>
      {/* left container */}
      <div className={`min-w-[410px] pl-[42px] pt-[38px]`}>
        {/* header */}
        <div className={`flex items-center`}>
          <div className={`uppercase text-xl font-light flex-1`}>
            TOUR
          </div>
          <div className={`cursor-pointer`}>
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
          <TourCard />
          <TourCard />
        </div>
      </div>
      {/* left container */}
      {/* right container */}
      <div className={`flex-1 overflow-y-auto pt-[38px] pr-[42px]`}>
        <AddTourForm
        />
      </div>
      {/* right container */}
    </div>
  )
}

export default Tour