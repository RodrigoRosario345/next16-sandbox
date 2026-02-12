"use client";

import { startTransition, useOptimistic, useState } from "react";

const calledPromise = async (setValue: React.Dispatch<React.SetStateAction<{ complete: boolean }>>) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 3000);
  });
};

export default function Home() {
  const [value, setValue] = useState({ complete: false });

  // si muestra el valor optmista siempre y cuando el valor del estado no haya cambiado, si el estado cambia, el valor optimista se resetea al nuevo valor del estado
  // si el codigo asincrono falla o finaliza y estado no ha cambiado el valor optmista retorna el valor anterior, si el estado ha cambiado, el valor optmista se resetea al nuevo valor del estado
  const [optimistic, applyOptimistic] = useOptimistic(
    value,
    (state, nextValue: boolean) => {
      console.log("REDUCER → prev:", state.complete, "action:", nextValue);
      return { complete: nextValue };
    },
  );

  const onToggle = () => {
    console.log("--- CLICK ---");
    console.log("closure before try:", optimistic.complete);

    startTransition(async () => {
      try {
        const value = !optimistic.complete;
        console.log("TRY → passing value:", value);

        applyOptimistic(value);

        console.log("AFTER optimistic (still closure):", optimistic.complete);

        await calledPromise(setValue); //  forzamos error

        console.log("SERVER OK");
      } catch {
        // console.log("CATCH ENTER");
        // console.log("closure in catch:", optimistic.complete);

        // const rollbackValue = !optimistic.complete;
        // console.log("CATCH → passing value:", rollbackValue);
        // startTransition(() => {
        //   applyOptimistic(rollbackValue);
        // });
      }
    });
  };

  return (
    <div>
      <h1>Optimistic value: {String(optimistic.complete)}</h1>
      <button className="p-2 bg-amber-200 text-black rounded-lg" onClick={onToggle}>Toggle</button>
    </div>
  );
}
