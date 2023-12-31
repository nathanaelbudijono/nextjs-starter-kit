import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import * as React from "react";
import useCopy from "@/hooks/useCopy";

export default function Copy() {
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const [copiedValue, copy] = useCopy();
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const code = ref.current.nextElementSibling as HTMLElement;
    const toCopy = code.innerText;
    setValue(toCopy);
  }, []);

  return (
    <div
      className="relative h-0 -mb-5 bottom-[1.35rem] lg:bottom-3.5 px-4 text-typography-100 flex items-center justify-end"
      ref={ref}
    >
      <button
        className={`relative top-14 p-2 text-typography-100 opacity-50 hover:opacity-100 transition-all duration-300 rounded-md hover:bg-primary-300 dark:hover:bg-tertiary-300  ${
          copiedValue && "opacity-100"
        }`}
        onClick={() => copy(value)}
      >
        {copiedValue ? (
          <BsClipboardCheck className="text-xl" />
        ) : (
          <BsClipboard className="text-xl" />
        )}
      </button>
    </div>
  );
}
