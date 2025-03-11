import React from 'react'
import _ from 'lodash'

const Autocomplete = ({
  className,
}:{
  className?: string,
}) => {
  const [items, setItems] = React.useState<string[]>(["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "ugli", "voavanga", "watermelon", "xigua", "yellow watermelon", "zucchini"])
  const [tags, setTags] = React.useState<string[]>([])
  const [currentTag, setCurrentTag] = React.useState<string>('')
  const [isShowTop, setIsShowTop] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value)
  }

  const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    console.warn(e.key);
    if(e.key === "Enter") {
      if(currentTag === '') return
      setTags([...tags, currentTag])
      // setTags((prev) => {
      //   const clone = _.cloneDeep(prev)
      //   if(clone[currentTag]) {
      //     return prev
      //   }
      //   return clone[currentTag] = true
      // })
      setCurrentTag('')
    }
  }

  const handleOnOpen = () => {
    setIsOpen(true)
  }

  const handleOnClose = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 150);
  }

  return (
    <div className={`relative ${className ?? ''}`}>
      {/* <div>
        <div>
          {`currentTag: ${currentTag}`}
        </div>
        <div>
          {`tags: [${tags}]`}
        </div>
      </div> */}
      <input
        onFocus={handleOnOpen}
        onBlur={handleOnClose}
        type="text"
        className={`border border-border-input h-[52px] min-w-[410px] w-full rounded-[10px] px-4`}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        onClick={e => {
          console.log(`document.body.clientHeight: ${document.body.clientHeight}`);
          console.log(`e.pageY: ${e.pageY}`);
          const screenHeight = document.body.clientHeight
          const positionY = e.pageY
          const leftValue = screenHeight - positionY
          const result = leftValue < 200
          console.log("🚀 ~ Autocomplete ~ leftValue:", leftValue)
          console.log("🚀 ~ Autocomplete ~ result:", result)
          if(screenHeight - positionY < 200) {
            setIsShowTop(true)
          }else{
            setIsShowTop(false)
          }
        }}
        value={currentTag}
      />
      <div
        className={`${isOpen ? `block` : `hidden`} ${isShowTop ? `bottom-[52px]`: `top-[52px]`} bg-white z-10 w-[410px] absolute border max-h-[200px] overflow-y-auto border-border-input rounded-lg`}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer hover:bg-gray-200 p-2`}
              onClick={() => {
                setCurrentTag(item)
              }}
            >
              {item}
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Autocomplete