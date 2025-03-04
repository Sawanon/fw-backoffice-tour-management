import { SearchNormal1 } from "iconsax-react";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className={`flex relative`}>
        <input
          type={type}
          className={`border border-border-input h-[52px] w-[410px] rounded-[10px] placeholder:text-xl placeholder:font-light placeholder:text-placeholder pl-4 pr-12`}
          ref={ref}
          {...props}
        />
        <div className={`absolute right-4 top-0 bottom-0 flex items-center justify-center`}>
          <SearchNormal1 color="oklch(70.9% 0 0)" size={24} />
        </div>
      </div>
    );
  }
);
SearchInput.displayName = "Input";

export { SearchInput };

// const SearchInput = (props) => {
//   return (
//     <input
//       type="text"
//       className={`border border-border-input h-[52px] w-[410px] rounded-[10px]`}
//     />
//   )
// }

// export default SearchInput
