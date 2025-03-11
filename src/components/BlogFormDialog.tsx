import React, { ReactNode, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputComp } from "./InputComp";
import ButtonComp from "./ButtonComp";
import SelectComp from "./SelectComp";
import Autocomplete from "./Autocomplete";
import { Square } from "lucide-react";
import ContentControl from "./ContentControl";
import TextEditor from "./TextEditor";
import { Add, CloseCircle } from "iconsax-react";

type MyComponentProps = {
  children: ReactNode; // รับ children เข้ามา
};

const BlogFormDialog = ({ children }: MyComponentProps) => {
  const quillRef = useRef(null);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="lg:max-w-[700px]">
        <DialogHeader className={``}></DialogHeader>
        <div className={`overflow-y-auto max-h-[70dvh] space-y-4`}>
          <div>
            <div className={`text-base font-light`}>Title</div>
            <InputComp className={`mt-4 w-full`} />
          </div>
          <div>
            <div className={`text-base font-light`}>Description</div>
            <InputComp className={`mt-4 w-full`} />
          </div>
          <div>
            <div className={`text-base font-light`}>Permalink</div>
            <InputComp className={`mt-4 w-full`} />
          </div>
          <div>
            <div className={`text-base font-light`}>Head Photo</div>
            <div className={`mt-4`}>
              <InputComp className={`w-full`} type={`file`} />
            </div>
          </div>
          <div>
            <div className={`text-base font-light`}>Social Photo</div>
            <div className={`mt-4`}>
              <InputComp className={`w-full`} type={`file`} />
            </div>
          </div>
          <div>
            <div className={`text-base font-light`}>Status</div>
            <div className={`w-full`}>
              <SelectComp
                className={`w-full mt-4`}
                items={[`online`, `offline`]}
              />
            </div>
          </div>
          <div>
            <div className={`text-base font-light`}>Tag</div>
            <Autocomplete className={`mt-4 w-full`} />
          </div>
          <div>
            <div className={`text-base font-light`}>Photo</div>
            <div className={`mt-4`}>
              <InputComp className={`w-full`} type="file" />
            </div>
          </div>
          {/* TextEditor */}
          <div className={`mt-16`}>
            <div className={`flex gap-4`}>
              <div className={`mt-3 flex flex-col items-center gap-4`}>
                <Square className={`rotate-45 min-w-6 min-h-6`} />
                <div className={`bg-placeholder w-px h-full`}></div>
              </div>
              <div className={`flex-1`}>
                <div
                  className={`bg-action-button rounded-[10px] overflow-hidden`}
                >
                  <ContentControl className={`w-full bg-action-button`} />
                </div>

                <div className={`mt-4 mb-[50px]`}>
                  <TextEditor
                    ref={quillRef}
                    readOnly={false}
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
          </div>
          {/* TextEditor */}
          {/* photo upload */}
          <div className={`flex gap-4 mt-4`}>
            <div className={`mt-3 flex flex-col items-center gap-4`}>
              <Square className={`rotate-45 min-w-6 min-h-6`} size={24} />
              <div className={`bg-placeholder w-px h-full`}></div>
            </div>
            <div className={`flex-1`}>
              <div
                className={`bg-action-button rounded-[10px] overflow-hidden`}
              >
                <ContentControl className={`w-full bg-action-button`} />
              </div>
              <div
                className={`border border-border-input rounded-[10px] p-4 mt-4`}
              >
                <div
                  className={`bg-card-background text-placeholder flex justify-center items-center gap-2 py-4 px-4 rounded-[10px]`}
                >
                  <Add size={24} color="#A1A1A1" />
                  <div className={`text-base font-light cursor-pointer`}>
                    Photo
                  </div>
                </div>
                <div className={`grid grid-cols-3 gap-2 mt-4`}>
                  <div
                    className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}
                  >
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                  <div
                    className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}
                  >
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                  <div
                    className={`relative bg-red-800 rounded-[10px] min-w-36 h-28`}
                  >
                    <div className={`absolute -top-3 -right-3`}>
                      <CloseCircle color="#000" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* photo upload */}
          {/* add content button */}
          <div className={`flex gap-4 mt-4`}>
            <div className={`mt-3 flex flex-col items-center gap-4`}>
              <Square className={`rotate-45 min-w-6 min-h-6`} size={24} />
              <div className={`bg-placeholder w-px h-full`}></div>
            </div>
            <div className={`w-full`}>
              <div
                className={`bg-black flex justify-center items-center p-4 rounded-[10px] cursor-pointer`}
              >
                <Add color="#fff" size={24} />
                <div className={`text-white text-base font-light`}>Add</div>
              </div>
            </div>
          </div>
          {/* add content button */}
        </div>
        <DialogFooter className={``}>
          <ButtonComp className={`w-full mt-8`} onClick={() => {}}>
            Save
          </ButtonComp>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogFormDialog;
