import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Autocomplete from './Autocomplete';
import { InputComp } from './InputComp';
import ButtonComp from './ButtonComp';

type MyComponentProps = {
  children: ReactNode; // รับ children เข้ามา
};

const AddTourInfomationDialog = ({ children }: MyComponentProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <div>Edit Profile</div> */}
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader className={`space-y-4`}>
          <div>
            <div>
              icon code
            </div>
            <Autocomplete
              className={`mt-4`}
            />
          </div>
          <div>
            <div>name</div>
            <InputComp className={`w-full mt-4`} />
          </div>
        </DialogHeader>
        <DialogFooter className={``}>
          <ButtonComp
            className={`w-full mt-12`}
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

export default AddTourInfomationDialog