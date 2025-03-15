import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'

const MonthPicker = () => {
  const [date, setDate] = React.useState<Date>(new Date())
  const [mode, setMode] = React.useState<"month" | "year">("month")

  const handleOnClickYear = (year: number) => {
    setMode("month")
    setDate((prev) => {
      prev.setFullYear(year)
      return prev
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
      <div
        className={`border border-border-input rounded-[10px] p-4 flex justify-center`}
      >
          <div className={`text-xl font-light flex-1 text-center`}>
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
          <div>
            <CalendarIcon />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className={``}>
          {mode === "month" &&
            <div className={`flex justify-center`}>
              <div
                className={`cursor-pointer hover:bg-gray-100 p-1 rounded`}
                onClick={() => setMode("year")}
              >
                2024
              </div>
            </div>
          }
          {mode === "month"
          ?
          <div className={`grid grid-cols-4 gap-2 mt-4`}>
            {Array.from({length: 12}, (_, i)=> {
              return (
                <div
                  className={`hover:bg-gray-100 cursor-pointer select-none rounded text-center p-1`}
                  onClick={() => {
                    
                  }}
                >
                  {format(new Date().setMonth(i), 'MMM')}
                </div>
              )
            })}
          </div>
          :
          <div className={`grid grid-cols-3 gap-2 mt-4`}>
            {Array.from({length: 20}, (_, i) => {
              const currentYear = new Date()
              const year = currentYear.getFullYear()-i
              return (
                <div
                  className={`hover:bg-gray-100 cursor-pointer select-none rounded text-center`}
                  onClick={() => handleOnClickYear(year)}
                >
                  {year}
                  {/* {format(new Date().setFullYear(currentYear.getFullYear() - i), "YYYY")} */}
                </div>
              )
            })}
          </div>
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default MonthPicker