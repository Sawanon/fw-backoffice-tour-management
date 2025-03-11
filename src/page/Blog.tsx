import BlogCard from "@/components/BlogCard";
import BlogFormDialog from "@/components/BlogFormDialog";
import { SearchInput } from "@/components/SearchInput";
import { AddCircle, ArrowLeft2 } from "iconsax-react";
import React from "react";

const Blog = () => {
  return (
    <div className={`px-[42px] py-[38px]`}>
      {/* left container */}
      <div className={`min-w-[410px]`}>
        {/* header */}
        <div className={`flex items-center`}>
          <div className={`uppercase text-xl font-light flex-1`}>Blog</div>
          <div
            className={`cursor-pointer`}
            // onClick={handleOnClickAdd}
          >
            <AddCircle color="#000" size={24} />
          </div>
        </div>
        {/* header */}
        {/* search input */}
        <div className={`mt-7`}>
          <SearchInput
            placeholder={`Search Blog`}
          />
        </div>
        {/* search input */}
        {/* blog card list */}
        <div className={`mt-7`}>
          <BlogFormDialog>
            <div>
              <BlogCard
                className={`max-w-[410px]`}
                onEdit={()=>{

                }}
              />
            </div>
          </BlogFormDialog>
        </div>
        {/* blog card list */}
      </div>
      {/* left container */}
    </div>
  );
};

export default Blog;
