import { DocumentText, Edit, Message, Message2, Setting2, Star1 } from 'iconsax-react'
import React from 'react'

const SidebarComponent = () => {
  return (
    <div className={`w-[75px] h-dvh space-y-[62px] py-6 border-r border-border`}>
      <div className={` p-2 cursor-pointer hover:opacity-80`}>
        <Message color={`#000`} size={`1.5rem`} className={`mx-auto`} />
      </div>
      <div className={`p-2 cursor-pointer hover:opacity-80`}>
        <DocumentText color={`#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
      </div>
      <div className={`p-2 cursor-pointer hover:opacity-80`}>
        <Star1 color={`#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
      </div>
      <div className={`p-2 cursor-pointer hover:opacity-80`}>
        <Setting2 color={`#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
      </div>
      <div className={`p-2 cursor-pointer hover:opacity-80`}>
        <Edit color={`#A1A1A1`} size={`1.5rem`} className={`mx-auto`} />
      </div>
    </div>
  )
}

export default SidebarComponent