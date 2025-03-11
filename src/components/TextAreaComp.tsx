import { ChangeEventHandler } from 'react'

const TextAreaComp = ({
  className = "",
  onChange,
  rows,
}:{
  className?: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  rows?: number,
}) => {
  return (
    <div>
      <textarea
        rows={rows}
        className={`px-4 py-2 border border-border-input  rounded-[10px] min-w-[410px] ${className}`}
        onChange={onChange}
      />
    </div>
  )
}

export default TextAreaComp