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
          <SelectComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Country
        </div>
        <div className={`mt-2`}>
          <SelectComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Service
        </div>
        <div className={`mt-2`}>
          <SelectComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Location
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Email
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Password
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Contact
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Mobile Phone
        </div>
        <div className={`mt-2`}>
          <InputComp
            className={`w-full`}
          />
        </div>
      </div>
      <div>
        <div className={`text-base font-light`}>
          Tag
        </div>
        <div className={`mt-2`}>
          {/* <InputComp
            className={`w-full`}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default AddTourForm