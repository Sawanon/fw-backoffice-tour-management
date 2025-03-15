import { AddCircle, ArrowLeft2 } from "iconsax-react";
import { useState } from "react";
import { DatePicker } from "./DatePicker";
import ScheduleCard from "./ScheduleCard";
import TimePicker from "./TimePicker";
import { InputComp } from "./InputComp";
import SelectComp from "./SelectComp";
import ButtonComp from "./ButtonComp";
import ScheduleInfomation from "./ScheduleInfomation";
import PackageManagement from "./PackageManagement";
import ColorPicker from 'react-pick-color'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import InputTagComp from "./InputTagComp";
import MonthPicker from "./MonthPicker";

const ScheduleManagement = ({ onClickBack }: { onClickBack: () => void }) => {
  const [mode, setMode] = useState<"default" | "add" | "edit">("default");
  const [color, setColor] = useState("#EA4335")

  const handleOnClickBack = () => {
    onClickBack();
  };

  const handleOnClickAdd = () => {
    setMode("add");
  };

  const handleOnClickEdit = () => {
    setMode("edit")
  }

  const rednerMode = () => {
    switch (mode) {
      case "default":
        return <></>;
      case "add":
        return (
          <div
            className={`flex-1 overflow-y-auto pt-[38px] pr-[40px] pb-4 space-y-4`}
          >
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Start</div>
                <div className={`mt-4`}>
                  <DatePicker />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>End</div>
                <div className={`mt-4`}>
                  <DatePicker />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Time Start</div>
                <div className={`mt-4`}>
                  <TimePicker
                    onChange={(time) => {
                      console.log(time);
                    }}
                    className={`w-full h-[65px]`}
                  />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Time End</div>
                <div className={`mt-4`}>
                  <TimePicker
                    onChange={(time) => {
                      console.log(time);
                    }}
                    className={`w-full h-[65px]`}
                  />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>During Time</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Status</div>
                <div className={`mt-4`}>
                  <SelectComp
                    className={`h-[65px] min-w-0 w-full`}
                    items={[`Available`, `Full`, `Offline`, `Pending`, `Hold`]}
                  />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Price</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Discount</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Curency</div>
              <div className={`mt-4`}>
                <SelectComp className={`w-full h-[65px]`} />
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Second Line</div>
              <div className={`mt-4`}>
                <InputComp className={`w-full h-[65px]`} />
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Bullet</div>
              <div className={`mt-4 flex items-center gap-4`}>
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      className={`min-w-[54px] min-h-[54px] rounded-full`}
                      style={{
                        backgroundColor: `${color}`,
                      }}
                    >
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                  <ColorPicker
                    color={color}
                    onChange={color => setColor(color.hex)}
                  />
                  </PopoverContent>
                </Popover>
                <div>-</div>
                <div className={`flex-1`}>
                  <InputComp className={`h-[65px] flex-1`} />
                </div>
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Tag</div>
              <div className={`mt-4`}>
                {/* <Autocomplete className={`w-full h-[65px]`} /> */}
                <InputTagComp
                  className={`flex-1 max-w-full overflow-x-auto`}
                  inputClassName={`w-full max-w-full`}
                />
              </div>
            </div>
            <ButtonComp onClick={() => {}}>Save</ButtonComp>
          </div>
        );
      case "edit":
        return (
          <div
            className={`flex-1 overflow-y-auto pt-[38px] pr-[40px] pb-4 space-y-4`}
          >
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Start</div>
                <div className={`mt-4`}>
                  <DatePicker />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>End</div>
                <div className={`mt-4`}>
                  <DatePicker />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Time Start</div>
                <div className={`mt-4`}>
                  <TimePicker
                    onChange={(time) => {
                      console.log(time);
                    }}
                    className={`w-full h-[65px]`}
                  />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Time End</div>
                <div className={`mt-4`}>
                  <TimePicker
                    onChange={(time) => {
                      console.log(time);
                    }}
                    className={`w-full h-[65px]`}
                  />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>During Time</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Status</div>
                <div className={`mt-4`}>
                  <TimePicker
                    onChange={(time) => {
                      console.log(time);
                    }}
                    className={`w-full h-[65px]`}
                  />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Price</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Discount</div>
                <div className={`mt-4`}>
                  <InputComp className={`w-full h-[65px]`} />
                </div>
              </div>
            </div>
            <div className={`flex gap-2 items-end w-full`}>
              <div className={`p-1 flex-1`}>
                <div className={`font-light`}>Group Discount</div>
                <div className={`mt-4 flex gap-2 items-center`}>
                  <div className={`flex-1`}>
                    <InputComp className={`w-full flex-1 h-[65px]`} />
                  </div>
                  <div>-</div>
                  <div className={`flex-1`}>
                    <InputComp className={`w-full flex-1 h-[65px]`} />
                  </div>
                  <div className={`w-[140px]`}>
                    <SelectComp
                      className={`w-full min-w-0 h-[65px]`}
                      // endIcon={<Percent size={24} color="#000" />}
                      items={["%", "Curency"]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Curency</div>
              <div className={`mt-4`}>
                <SelectComp className={`w-full h-[65px]`} />
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Second Line</div>
              <div className={`mt-4`}>
                <InputComp className={`w-full h-[65px]`} />
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Bullet</div>
              <div className={`mt-4 flex items-center gap-4`}>
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      className={`min-w-[54px] min-h-[54px] rounded-full`}
                      style={{
                        backgroundColor: `${color}`,
                      }}
                    >
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                  <ColorPicker
                    color={color}
                    onChange={color => setColor(color.hex)}
                  />
                  </PopoverContent>
                </Popover>
                <div>-</div>
                <div className={`flex-1`}>
                  <InputComp className={`h-[65px] flex-1`} />
                </div>
              </div>
            </div>
            <div className={`w-full`}>
              <div className={`font-light`}>Tag</div>
              <div className={`mt-4`}>
                {/* <Autocomplete className={`w-full h-[65px]`} /> */}
                <InputTagComp
                  className={`flex-1 max-w-full overflow-x-auto`}
                  inputClassName={`w-full max-w-full`}
                />
              </div>
            </div>
            <ButtonComp onClick={() => {}}>Update</ButtonComp>
            <div className={`mt-10`}>
              <ScheduleInfomation />
            </div>
            <div className={`mt-10`}>
              <PackageManagement />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full flex gap-8`}>
      {/* left container */}
      <div className={`min-w-[410px] pl-[42px] pt-[38px]`}>
        {/* header */}
        <div className={`flex items-center gap-4`}>
          <div
            onClick={handleOnClickBack}
            className={`p-2 cursor-pointer rounded-lg hover:bg-card-background transition`}
          >
            <ArrowLeft2 color="#000" size={24} />
          </div>
          <div className={`text-xl font-light`}>Issara Liveaboard</div>
        </div>
        {/* header */}
        {/* filter */}
        <div className={`mt-4 flex gap-4 items-center`}>
          <div className={`flex-1`}>
            {/* <DatePicker /> */}
            <MonthPicker />
          </div>
          <div onClick={handleOnClickAdd} className={`cursor-pointer`}>
            <AddCircle color="#000" size={24} />
          </div>
        </div>
        {/* filter */}
        {/* schedule card */}
        <div className={`mt-7 space-y-4`}>
          <ScheduleCard onEdit={handleOnClickEdit} />
          <ScheduleCard onEdit={handleOnClickEdit} />
          <ScheduleCard onEdit={handleOnClickEdit} isPromotion />
        </div>
        {/* schedule card */}
      </div>
      {/* left container */}
      {/* right container */}
      {rednerMode()}

      {/* right container */}
    </div>
  );
};

export default ScheduleManagement;
