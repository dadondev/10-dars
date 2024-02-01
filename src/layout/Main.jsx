import FirstModal from "../components/modals/firstModal";
import SecondModal from "../components/modals/secondModal";

function Main() {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <h1 className="font-bold text-3xl font-mono pb-1 border-b-[4px] border-black inline-flex relative after:content-[''] after:w-[calc(100%-20%)] after:absolute after:-bottom-3 after:h-[4px] after:bg-black">
        Components
      </h1>
      <div className="pt-6 flex flex-col gap-4">
        <FirstModal />
        <SecondModal />
      </div>
    </div>
  );
}

export default Main;
