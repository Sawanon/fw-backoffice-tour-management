import React, { ChangeEventHandler } from 'react'

const TextAreaComp = ({
  className = "",
  onChange,
}:{
  className?: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}) => {
  return (
    <div>
      <textarea
        className={`px-4 py-2 border border-border-input  rounded-[10px] min-w-[410px] ${className}`}
        onChange={onChange}
      />
    </div>
  )
}

export default TextAreaComp