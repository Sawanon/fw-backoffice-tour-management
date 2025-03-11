import { AddCircle } from 'iconsax-react'
import React from 'react'
import AddPackageDialog from './AddPackageDialog'
import PackageCard from './PackageCard'

const PackageManagement = () => {
  return (
    <div>
      {/* header */}
      <div className={`flex items-center`}>
        <div className={`text-3xl font-light flex-1`}>
        Packages
        </div>
        <AddPackageDialog>
          <div className={`cursor-pointer`}>
            <AddCircle size={24} color='#000' />
          </div>
        </AddPackageDialog>
      </div>
      {/* header */}
      {/* package card */}
      <div className={`mt-7 space-y-10`}>
        <PackageCard
          className={``}
        />
        <div className={`bg-placeholder h-px w-5/6 mx-auto`}>
        </div>
        <PackageCard
          className={``}
        />
      </div>
      {/* package card */}
    </div>
  )
}

export default PackageManagement