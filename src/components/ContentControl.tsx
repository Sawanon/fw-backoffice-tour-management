import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowDown, ArrowDown2, ArrowUp2 } from 'iconsax-react'
import { X } from 'lucide-react'

const ContentControl = ({
  className,
}:{
  className?: string,
}) => {
  return (
    <div className={`flex`}>
      <Select>
        <SelectTrigger className={`min-w-[410px] border border-border-input h-[52px] ${className}`}>
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="text">Text</SelectItem>
          <SelectItem value="photo">Photo</SelectItem>
        </SelectContent>
      </Select>
      <div className={`bg-card-background flex justify-center items-center px-4`}>
        <ArrowDown2 color='#000' size={24} />
      </div>
      <div className={`bg-card-background flex justify-center items-center px-4`}>
        <ArrowUp2 color='#000' size={24} />
      </div>
      <div className={`bg-card-background flex justify-center items-center px-4`}>
        <X color='#000' size={24} />
      </div>
    </div>
  )
}

export default ContentControl