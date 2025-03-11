import { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputComp } from './InputComp';
import ButtonComp from './ButtonComp';
import SelectComp from './SelectComp';

type MyComponentProps = {
  children: ReactNode; // รับ children เข้ามา
};

const AddPackageDialog = ({ children }: MyComponentProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader className={``}>
        </DialogHeader>
        <div className={`overflow-y-auto max-h-[70dvh] space-y-4`}>
          <div>
            <div className={`text-base font-light`}>
              Title
            </div>
            <InputComp
              className={`mt-4 w-full`}
            />
          </div>
          <div>
            <div className={`text-base font-light`}>
              Description
            </div>
            <InputComp
              className={`mt-4 w-full`}
            />
          </div>
          <div>
            <div className={`text-base font-light`}>
              Speicla Deal
            </div>
            <InputComp
              className={`mt-4 w-full`}
            />
          </div>
          <div>
            <div className={`text-base font-light`}>
              Discount
            </div>
            <div className={`flex mt-4 gap-4`}>
              <div className={`flex-1`}>
                <InputComp className={`w-full`} />
              </div>
              <div className={``}>
                <SelectComp
                  className={`min-w-[140px]`}
                  items={["THB"]}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={`text-base font-light`}>
              Price
            </div>
            <div className={`flex mt-4 gap-4 items-center`}>
              <div className={`flex-1`}>
                <InputComp className={`w-full`} />
              </div>
              <div className={``}>
                <SelectComp
                  className={`min-w-[140px]`}
                  items={["THB"]}
                />
              </div>
              <div className={`font-light`}>
                /
              </div>
              <div className={`flex-1`}>
                <InputComp className={`w-full`} />
              </div>
            </div>
          </div>
          <div>
            <div className={`text-base font-light`}>
              available
            </div>
            <InputComp
              className={`mt-4 w-full`}
            />
          </div>
          <div>
            <div className={`text-base font-light`}>
              Photo
            </div>
            <div className={`mt-4`}>
              <InputComp
                className={`w-full`}
                type='file'
              />
            </div>
          </div>
        </div>
        <DialogFooter className={``}>
          <ButtonComp
            className={`w-full mt-8`}
            onClick={() => {

            }}
          >
            Save
          </ButtonComp>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddPackageDialog