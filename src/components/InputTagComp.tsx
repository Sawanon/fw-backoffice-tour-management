import { X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const InputTagComp = ({
  className,
  inputClassName,
}:{
  className?: string,
  inputClassName?: string,
}) => {
  const divRefs = useRef<(HTMLDivElement | null)[]>([])
  const [widths, setWidths] = useState<number[]>([])

  const [items, setItems] = useState<string[]>([])
  const [currentValue, setCurrentValue] = useState<string>("")

  useEffect(() => {
    if(divRefs.current.length > 0){
      const newsWidths = divRefs.current.map((div) => div?.getBoundingClientRect().width || 0).filter((value) => value !== 0)
      setWidths(newsWidths)
    }
  }, [items])

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      setItems((prev) => {
        const clone = [...prev]
        clone.push(currentValue)
        return clone
      })
      setCurrentValue("")
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value)
  }

  const handleDeleteItem = (index: number) => {
    setItems((prev) => {
      const clone = [...prev]
      clone.splice(index, 1)
      return clone
    })
    // setWidths((prev) => {
    //   const clone = [...prev]
    //   clone.splice(index, 1)
    //   return clone
    // })
  }

  const allWidth = () => {
    if(widths.length > 0){
      return widths.reduce((prev, current) => (prev ?? 0) + (current ?? 0)) + (widths.length * 4) + 16
    }
    return 16
  }
  console.log(widths)

  return (
    <div className={`relative ${className ?? ``}`}>
      {/* <div className={`bg-red-400 text-white`}>
        {widths.map((w, i) => (
          <li key={i}>ความกว้างของ div {items[i]}: {w}px</li>
        ))}
      </div> */}
      <div className={`flex gap-1 absolute left-4 top-0 bottom-0 items-center`}>
        {items.map((item, index) => (
          <div
            key={`bage${index}`}
            ref={(el) => {
              divRefs.current[index] = el;
            }}
            className={`bg-card-background rounded p-4 flex gap-1 items-center`}
          >
            <div className={`text-base font-light`}>
              {item}
            </div>
            <div
              className={`bg-transparent hover:bg-white rounded cursor-pointer p-1`}
              onClick={() => handleDeleteItem(index)}
            >
              <X size={16} />
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className={`h-[80px] min-w-[410px] border border-border-input rounded-[10px] ${inputClassName ?? ``}`}
        style={{
          paddingLeft: `${allWidth()}px`
        }}
        value={currentValue}
        onChange={handleOnChange}
        onKeyDown={handleOnEnter}
      />
    </div>
    // <div>
    //   InputTagComp
    // </div>
  )
}

export default InputTagComp