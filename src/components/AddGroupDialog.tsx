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

type MyComponentProps = {
  children: ReactNode; // รับ children เข้ามา
};

const AddGroupDialog = ({ children }: MyComponentProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader className={`space-y-4`}>
          <div>
            <div>
              Group Name
            </div>
            <InputComp
              className={`mt-4 w-full`}
            />
          </div>
        </DialogHeader>
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

export default AddGroupDialog