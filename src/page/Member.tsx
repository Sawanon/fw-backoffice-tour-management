import { SearchInput } from '../components/SearchInput'
import MemberCard from '../components/MemberCard'

const Member = () => {
  return (
    <div className={`pl-[42px] pt-[38px]`}>
      <div className={`uppercase text-xl font-light`}>
        MEMBER
      </div>
      <div className={`mt-7`}>
        <SearchInput
          placeholder={`Search name or email`}
        />
      </div>
      <div className={`mt-4 space-y-4`}>
        <MemberCard
          isVerify
        />
        <MemberCard
          isVerify={false}
        />
      </div>
    </div>
  )
}

export default Member