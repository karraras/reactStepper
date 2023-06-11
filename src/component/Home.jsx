import React from "react";
import { FcCheckmark } from "react-icons/fc";

function Home() {
  const items = [
    { num: 1, name: "Customer Info", icon: FcCheckmark },
    { num: 2, name: "Shipping Info", icon: FcCheckmark },
    { num: 3, name: "Payment", icon: FcCheckmark },
  ];
  const [move, setMove] = React.useState(0);
  const handleMove = () => {
    if (move < 4) {
      setMove((prev) => prev + 1);
    }
  };
  return (
    <section className="h-screen bg-slate-900 flex items-center justify-center">
      <div className=" h-60 w-[500px] flex items-center justify-evenly flex-col">
        <ul className="text-white flex justify-between w-full ">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex justify-center items-center flex-col gap-1 w-1/3 `}
              >
                <li
                  className={`flex justify-center  items-center rounded-full w-8 h-8 ${
                    i < move
                      ? "bg-green-500 "
                      : i === move
                      ? "bg-sky-500"
                      : "bg-slate-500"
                  }`}
                >
                  {i < move ? (
                    <div>{React.createElement(item.icon, { size: "20" })}</div>
                  ) : (
                    item.num
                  )}
                </li>
                <span
                  className={`${i < move ? "text-white" : "text-slate-500"}`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </ul>
        <button
          onClick={() => handleMove()}
          className={`text-white rounded bg-slate-400 px-4 py-1 ${
            move > 2 ? "hidden" : "block"
          }`}
        >
          {move >= 2 ? " Finish" : " Next"}
        </button>
      </div>
    </section>
  );
}
export default Home;
