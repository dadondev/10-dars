import { useEffect } from "react";

function Counter() {
  useEffect(() => {
    console.log("Counter chizildi");
    return () => console.log("Counter ochirildi");
  });
  return <div>0</div>;
}

export default Counter;
