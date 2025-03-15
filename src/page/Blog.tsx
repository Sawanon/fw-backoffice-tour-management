import BlogCard from "@/components/BlogCard";
import BlogFormDialog from "@/components/BlogFormDialog";
import PhotoCarousel from "@/components/PhotoCarousel";
import { SearchInput } from "@/components/SearchInput";
import { AddCircle } from "iconsax-react";
// import {} from 'embla-carousel-autopla'

const Blog = () => {
  return (
    <div className={`flex gap-4 w-full`}>
      {/* left container */}
      <div className={`min-w-[410px] px-[42px] py-[38px]`}>
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
      {/* right container */}
      <div className={`flex-1 relative overflow-y-auto pb-10`}>
        {/* cover */}
        <div className={`h-[305px] overflow-hidden relative`}>
          <img src="/images/image.jpeg" className={`object-cover w-full`} />
        </div>
        {/* cover */}
        {/* desciption */}
        <div className={`rounded-t-[40px] bg-white -mt-12 z-10 relative px-[100px] pt-10`}>
            <div className={`text-xl font-light`}>
              Description
            </div>
            <div className={`mt-4 text-sm font-light`}>
              If you have any questions or need assistance, please let us know "Inquire about information" “Book a diving trip" "Subscribe to promotion alerts"
            </div>
        </div>
        {/* desciption */}
        {/* slide image */}
        <div className={`flex gap-4 relative pt-10`}>
          <div className={`rounded-lg mx-auto w-full`}>
            <PhotoCarousel />
          </div>
          {/* <div className={`absolute -left-[100px] top-0 w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
          {/* <div className={`absolute left-0 top-0 w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
          {/* <div className={`absolute w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
        </div>
        {/* slide image */}
        {/* desciption */}
        <div className={`bg-white relative px-[100px] pt-10`}>
            <div className={`mt-4 text-sm font-light`}>
              If you have any questions or need assistance, please let us know "Inquire about information" “Book a diving trip" "Subscribe to promotion alerts"
            </div>
        </div>
        {/* desciption */}
        {/* slide image */}
        <div className={`flex gap-4 relative pt-10`}>
          <div className={`rounded-lg mx-auto w-full`}>
            <PhotoCarousel />
          </div>
          {/* <div className={`absolute -left-[100px] top-0 w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
          {/* <div className={`absolute left-0 top-0 w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
          {/* <div className={`absolute w-[343px] h-[260px] bg-red-400 rounded-[20px]`}>
          </div> */}
        </div>
        {/* slide image */}
      </div>
      {/* right container */}
    </div>
  );
};

export default Blog;
