import React, { useEffect, useRef, useState } from "react";
function SecondModal() {
  const [click, setClick] = useState({ isClick: false });
  const [open, setOpen] = useState({ isOpen: false });
  const btnRef = useRef();
  useEffect(() => {
    if (open.isOpen) {
      btnRef.current.showModal();
    } else {
      btnRef.current.close();
    }

    open.isOpen &&
      addEventListener("keyup", (e) => {
        console.log(open.isOpen);
        if (open.isOpen && e.key == "Escape") {
          btnRef.current.showModal();
        }
      });
  }, [open]);
  //  this useEffect for open event

  useEffect(() => {
    if (click.isClick) {
      btnRef.current.close();
    }
  }, [click]);

  return (
    <div className="w-full h-72 bg-gray-300 rounded-lg overflow-hidden grid grid-rows-[40px_1fr]">
      <div className="w-full bg-gray-500 px-4 flex items-center justify-between">
        <span className="text-white">Second Modal</span>

        <svg
          className="cursor-pointer"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(239,59,59,1)"
        >
          <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
        </svg>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="btn btn-ghost bg-slate-50"
          onClick={() => {
            setOpen({ isOpen: true });
          }}
        >
          Open modal
        </button>
        <dialog
          onClick={() => {
            setClick({
              isClick: true,
            });
          }}
          ref={btnRef}
          className="bg-slate-blue rounded-xl transition-all modal "
        >
          <div className="sm:max-w-[400px] sm:max-h-[300px] sm:h-[200px] sm:w-[400px] px-4 py-4 flex flex-col bg-white rounded-lg relative z-20 w-[calc(100%-20%)] min-h-[200px]:">
            <span className="text-3xl block mb-3 font-mono font-semibold ">
              Hello!
            </span>
            <p className="text-xl font-mono">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <form
              method="dialog"
              className="w-full grow  flex items-end justify-end"
            >
              <button
                className="btn btn-outline"
                onClick={() => {
                  setOpen({ isOpen: false });
                }}
              >
                Close
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default SecondModal;
