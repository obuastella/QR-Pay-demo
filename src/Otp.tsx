import { FaRegUser } from "react-icons/fa6";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export default function Otp() {
    return (
        <div className="flex justify-start items-center min-h-screen p-4 sm:p-8 lg:p-10">
      <div className="w-full">
        <div className="flex items-center mb-6 sm:mb-8">
          <img src="image/zionLogo.png" alt="Logo" className="h-10 sm:h-full" />
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D2B78] font-normal ml-4 sm:ml-6">
            Personal Information
          </h2>
          <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#0D2B78] text-white flex items-center justify-center ml-4">
            <FaRegUser className="w-3 h-3 sm:w-5 sm:h-5" />
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-16 h-[600px] border-2 border-primary">
        <p className="text-sm sm:text-xl text-[#333333] font-normal mb-3">
            Please verify your phone number.
          </p>
          <p className="text-[#797979] mb-3">We sent a verification code via SMS to (555) 555-1212.  Please enter the code below within the next 10 min.</p>
          <div className="mb-3">
          <InputOTP
                  className="m-auto"
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  render={({ slots }) => (
                    <InputOTPGroup className="space-x-0 sm:space-x-4 w-full">
                      {slots.map((slot, index) => (
                        <InputOTPSlot
                          className="border border-[#909090] w-10 h-10 rounded-lg"
                          key={index}
                          {...slot}
                        />
                      ))}
                    </InputOTPGroup>
                  )}
                //   onChange={handlePinChange}
                />
          </div>
          <button className="text-primary font-semibold">Resend the code</button>
        </div>
      </div>
    </div>
    )
}