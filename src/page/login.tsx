import React from 'react'

const LoginPage = () => {
  return (
    <div className={`bg-white absolute inset-0`}>
      <div className={`bg-black opacity-85 absolute inset-0 flex items-center justify-center`}>
        <div className={`bg-white pt-[54px] px-9 pb-[38px] rounded-[20px] w-96`}>
          <div className={`text-xl font-light text-center`}>
            ADMINISTRATOR
          </div>
          <div className={`mt-[22px]`}>
            E-mail
          </div>
          <div className={`mt-2`}>
            <input
              type="text"
              className={`h-12 w-full rounded-2xl px-6 border border-border`}
              placeholder={`E-mail`}
            />
          </div>
          <div className={`mt-4`}>
            Password
          </div>
          <div className={`mt-2`}>
            <input
              type="text"
              className={`h-12 w-full rounded-2xl px-6 border border-border`}
              placeholder={`Password`}
            />
          </div>
          <div className={`mt-7`}>
            <div className={`h-12 w-full bg-[#0096CD] hover:bg-[#00B6F8] font-light text-base text-white flex justify-center items-center rounded-2xl select-none cursor-pointer`}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage