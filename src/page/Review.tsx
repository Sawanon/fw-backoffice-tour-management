import ReviewCard from '@/components/ReviewCard'
import { ArrowLeft2 } from 'iconsax-react'

const Review = () => {
  
  return (
    <div className={`px-[42px] py-[38px]`}>
      {/* header */}
      <div className={`flex gap-4 items-center`}>
        <div>
          <ArrowLeft2 color='#000' size={24} />
        </div>
        <div className={`text-xl font-light`}>
          Review
        </div>
      </div>
      {/* header */}
      {/* reviewed items */}
      <div className={`mt-7 space-y-8`}>
        <ReviewCard
          reviewData={{
            username: 'Name',
            textReview: `Book Today Your Liveaboard Trip to Hold Your Spot - Customer Support 24/7. Found Cheaper Elsewhere? Contact Us & We Match the Price or Beat it`,
          }}
        />
        <ReviewCard
          reviewData={{
            username: 'Name',
            textReview: `Book Today Your Liveaboard Trip to Hold Your Spot - Customer Support 24/7. Found Cheaper Elsewhere? Contact Us & We Match the Price or Beat it`,
            images: [`1.png`,`2.png`,`3.png`,`4.png`],
          }}
        />
      </div>
      {/* reviewed items */}
    </div>
  )
}

export default Review