import React from "react";
import { InputProps } from "./SearchInput";

const InputComp = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    const onClickInput =  () => {
      inputRef.current?.click();
    }
    return (
      <div className={`flex relative`}>
        {type === "file" ? (
          <div
            className={`border border-border-input h-[52px] w-[410px] rounded-[10px] placeholder:text-xl placeholder:font-light placeholder:text-placeholder pl-4 pr-12 ${className}`}
            onClick={onClickInput}
          >
            <input type="file" ref={inputRef} className={`hidden`} />
            <div
              className={`select-none cursor-pointer px-4 py-2 text-placeholder bg-action-button absolute right-0 top-0 bottom-0 flex items-center justify-center rounded-r-[10px]`}
            >
              Browse
            </div>
          </div>
        ) : (
          <input
            type={type}
            className={`border border-border-input h-[52px] w-[410px] rounded-[10px] placeholder:text-xl placeholder:font-light placeholder:text-placeholder pl-4 pr-12 ${className}`}
            ref={ref}
            {...props}
          />
        )}
      </div>
    );
  }
);

InputComp.displayName = "Input";

export { InputComp };
