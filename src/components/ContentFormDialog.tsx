import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContentControl from "./ContentControl";
import { Square } from "lucide-react";
import TextEditor from "./TextEditor";
import { Add, CloseCircle } from "iconsax-react";
import ButtonComp from "./ButtonComp";

const ContentFormDialog = ({
  children,
}:{
  children: React.ReactNode;
}) => {
  const quillRef = useRef(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[1000px] w-[1000px] lg:max-w-[700px]">
        <DialogHeader>
          {/* <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className={`overflow-y-auto max-h-[80dvh]`}>
          <div className={`flex gap-4`}>
            <div className={`mt-3 flex flex-col items-center gap-4`}>
              <Square className={`rotate-45 min-w-6 min-h-6`} />
              <div className={`bg-placeholder w-px h-full`}></div>
            </div>
            <div className={`flex-1`}>
              <div className={`bg-action-button rounded-[10px] overflow-hidden`}>
                <ContentControl
                  className={`w-full bg-action-button`}
                />
              </div>
              {/* <div className={`bg-blue-200 p-4`}>
                <div className={`flex`}>
                  <div className={`p-2`}>
                    <Undo2 className={`text-placeholder`} />
                  </div>
                  <div className={`p-2`}>
                    <Redo2 className={`text-placeholder`} />
                  </div>
                </div>
                <TextAreaComp
                  className={`w-full mt-3`}
                  rows={10}
                />
              </div> */}
              
              <div className={`mt-4 mb-[50px]`}>
                <TextEditor
                  ref={quillRef}
                  readOnly={false}
                  // defaultValue={new Delta()
                  //   .insert('Hello')
                  //   .insert('\n', { header: 1 })
                  //   .insert('Some ')
                  //   .insert('initial', { bold: true })
                  //   .insert(' ')
                  //   .insert('content', { underline: true })
                  //   .insert('\n')}
                  onSelectionChange={(e) => {
                    console.log(e);
                  }}
                  onTextChange={(e) => {
                    console.log(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`flex gap-4 mt-4`}>
            <div className={`mt-3 flex flex-col items-center gap-4`}>
              <Square className={`rotate-45 min-w-6 min-h-6`} size={24} />
              <div className={`bg-placeholder w-px h-full`}></div>
            </div>
            <div className={`flex-1`}>
              <div className={`bg-action-button rounded-[10px] overflow-hidden`}>
                <ContentControl
                  className={`w-full bg-action-button`}
                />
              </div>
              <div className={`border border-border-input rounded-[10px] p-4 mt-4`}>
                <div className={`bg-card-background text-placeholder flex justify-center items-center gap-2 py-4 px-4 rounded-[10px]`}>
                  <Add size={24} color="#A1A1A1" />
                  <div className={`text-base font-light cursor-pointer`}>
                    Photo
                  </div>
                </div>
                <div className={`grid grid-cols-3 gap-2 mt-4`}>
                  <div className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}>
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                  <div className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}>
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                  <div className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}>
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex gap-4 mt-4`}>
            <div className={`mt-3 flex flex-col items-center gap-4`}>
              <Square className={`rotate-45 min-w-6 min-h-6`} size={24} />
              <div className={`bg-placeholder w-px h-full`}></div>
            </div>
            <div className={`w-full`}>
              <div className={`bg-black flex justify-center items-center p-4 rounded-[10px] cursor-pointer`}>
                <Add color="#fff" size={24} />
                <div className={`text-white text-base font-light`}>
                  Add
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className={``}>
          <ButtonComp
            className={`w-full`}
            onClick={() => {
              
            }}
          >
            Save
          </ButtonComp>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContentFormDialog;
