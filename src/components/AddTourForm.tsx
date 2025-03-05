import React from 'react'
import { InputComp } from './InputComp'
import TextAreaComp from './TextAreaComp'
import SelectComp from './SelectComp'

const AddTourForm = () => {
  return (
    <div className={`space-y-4`}>
      <div>
        <div className={`text-base font-light`}>
          Head Photo
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
            type='file'
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Tour Name
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
            type='text'
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Description
        </div>
        <div className={`mt-2`}>
          <TextAreaComp
            className={`w-full min-h-[100px]`}
            onChange={(e) => {
              console.log(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          City
        </div>
        <div className={`mt-2`}>
          <SelectComp />
        </div>
      </div>
    </div>
  )
}

export default AddTourForm