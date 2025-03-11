import { ArrowDown2 } from 'iconsax-react'
import { CheckCircle2, StarIcon, XCircle } from 'lucide-react'

export type ReviewData = {
  username: string,
  textReview: string,
  images?: string[],
}

const ReviewCard = ({
  reviewData,
}:{
  reviewData: ReviewData,
}) => {
  return (
    <div className={`flex gap-4`}>
      {/* approve reject icon */}
      <div className={`space-y-2`}>
        <div className={`cursor-pointer`}>
          <XCircle size={24} color='#EA4335' />
        </div>
        <div className={`cursor-pointer`}>
          <CheckCircle2 size={24} color='#34A853' />
        </div>
      </div>
      {/* approve reject icon */}
      {/* review content */}
      <div className={`min-w-[430px] max-w-[430px]`}>
        {/* user name */}
        <div className={`text-xl font-light`}>
          {reviewData.username}
        </div>
        {/* user name */}
        {/* rating score */}
        <div className={`flex gap-2 items-center mt-2`}>
          {/* rating star */}
          <div className={`flex gap-1`}>
            <StarIcon size={24} color='#000' />
            <StarIcon size={24} color='#000' />
            <StarIcon size={24} color='#000' />
            <StarIcon size={24} color='#000' />
            <StarIcon size={24} color='#000' />
          </div>
          {/* rating star */}
          {/* score */}
          <div className={`text-base font-light`}>(9.2)</div>
          {/* score */}
          {/* createdAt */}
          <div className={`text-[11px] font-light`}>
            13/01/2025
          </div>
          {/* createdAt */}
          {/* drop down something ? */}
          <div className={`flex-1 flex justify-end`}>
            <ArrowDown2 size={24} color='#000' />
          </div>
          {/* drop down something ? */}
        </div>
        {/* rating score */}
        <div className={`h-px w-full bg-black mt-4`}>
          {/* divider */}
        </div>
        {/* review text */}
        <div className={`relative`}>
          <div>
            {reviewData.textReview}
          </div>
          {reviewData.images &&
            <div className={`flex gap-4 overflow-x-auto mt-4`}>
              {reviewData.images.map(() => (
                <div className={`min-w-[140px] h-[108px] bg-red-800 rounded-[20px]`}>
                </div>
              ))
              }
            </div>
          }
          {/* <div className={`absolute inset-0 bg-gradient-to-b from-transparent from-40% to-white`}> */}
            {/* fade */}
          {/* </div> */}
        </div>
        {/* review text */}
      </div>
      {/* review content */}
    </div>
  )
}

export default ReviewCard