import { useState } from "react";

import { RadioGroup } from "@headlessui/react";
import Die from "../components/dice";
import Calculator from "../components/calculator";

function DiceRoller() {
  const [rollLog, setRollLog] = useState<Roll[][]>([]);
  const [mod, setMod] = useState(1);

  // Deletes all rolls from the log
  const clearRoll = () => {
    setRollLog([]);
  };

  // Append a group of rolls plus modifiers to the log
  const appendRoll = (rollGroup: Roll[]) => {
    setRollLog((oldLog) => [...oldLog, rollGroup]);
  };

  return (
    <div className="container mx-auto flex flex-col px-4">
      <h1 className=" p-4 text-3xl font-bold">Prophecy DM Tool</h1>
      <div className=" flex gap-8">
        <RadioGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minWidth: "64px",
          }}
          value={mod}
          onChange={setMod}
        >
          <RadioGroup.Option value={1}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300" : "btn"}>
                1
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={2}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300 " : "btn"}>
                2
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={3}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300" : "btn"}>
                3
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={4}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300" : "btn"}>
                4
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={5}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300" : "btn"}>
                5
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value={6}>
            {({ checked }) => (
              <button className={checked ? "btn bg-slate-300" : "btn"}>
                6
              </button>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <div className="flex flex-col items-start gap-2">
          <Die face={4} mod={mod} appendRoll={appendRoll} />
          <Die face={6} mod={mod} appendRoll={appendRoll} />
          <Die face={8} mod={mod} appendRoll={appendRoll} />
          <Die face={10} mod={mod} appendRoll={appendRoll} />
          <Die face={12} mod={mod} appendRoll={appendRoll} />
          <Die face={20} mod={mod} appendRoll={appendRoll} />
        </div>
        <Calculator rollLog={rollLog} clearLog={clearRoll} />
      </div>
    </div>
  );
}

export default DiceRoller;
