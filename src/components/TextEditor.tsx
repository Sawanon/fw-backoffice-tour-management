import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type EditorProps = {
  readOnly?: boolean;
  defaultValue?: any; // ปรับเปลี่ยนเป็นโครงสร้างที่เหมาะสมของ Quill
  onTextChange?: (...args: any[]) => void;
  onSelectionChange?: (...args: any[]) => void;
};

type QuillEditor = Quill | null;

const TextEditor = forwardRef<QuillEditor, EditorProps>(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    }, [onTextChange, onSelectionChange]);

    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.enable(!readOnly);
      }
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );
      const toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        ['bold', 'italic'],        // toggled buttons
        // ['blockquote', 'code-block'],
        // ['link', 'image', 'video', 'formula'],
      
        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'align': [] }],
        // [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction
        // [{ 'color': [] }, { 'background': [] }],
        [{ 'color': [] }],
        ['link'],
      
        // ['clean']                                         // remove formatting button
      ];
      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        }
      });

      if (ref && typeof ref !== "function") {
        ref.current = quill;
      }

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        if (ref && typeof ref !== "function") {
          ref.current = null;
        }
        container.innerHTML = "";
      };
    }, [ref]);

    return <div className={`h-[300px]`} ref={containerRef}></div>;
  }
);

TextEditor.displayName = "Editor";

export default TextEditor;
