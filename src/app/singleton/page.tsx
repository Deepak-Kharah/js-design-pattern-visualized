"use client";

import React, { useState } from "react";
import { NormalTrafficSignal, SingletonTrafficSignal } from "./implementation";
import TrafficSignal from "./TrafficSignal";
import style from "./page.module.css";
import classNames from "classnames";

function Singleton() {
  return (
    <main className=" text-center text-white">
      <h1 className="text-3xl py-5">Singleton Pattern</h1>

      <div className="divide-y divide-gray-600">
        <TrafficSignalModule
          getInstance={NormalTrafficSignal.getInstance}
          title="Normal Traffic Signal"
        />
        <TrafficSignalModule
          getInstance={SingletonTrafficSignal.getInstance}
          title="Singleton Traffic Signal"
        />
      </div>
    </main>
  );
}

interface TestProps<T extends NormalTrafficSignal | SingletonTrafficSignal> {
  getInstance: () => T;
  title: string;
}

function TrafficSignalModule<
  T extends NormalTrafficSignal | SingletonTrafficSignal
>({ getInstance, title }: TestProps<T>) {
  const [trafficSignals, setTrafficSignals] = useState<T[]>([getInstance()]);

  function addNewTrafficSignal() {
    const newTrafficSignal = getInstance();
    setTrafficSignals([...trafficSignals, newTrafficSignal]);
  }

  function deleteTrafficSignal(index: number) {
    const newTrafficSignals = [...trafficSignals];
    newTrafficSignals.splice(index, 1);
    setTrafficSignals(newTrafficSignals);
  }

  return (
    <div className=" flex flex-col gap-6 items-center py-5 bg-gray-800">
      <h2 className="text-xl">{title}</h2>
      <div className="flex gap-3">
        {trafficSignals.map((trafficSignal, index) => {
          return (
            <div
              key={index}
              className={classNames(
                style["signal-instance"],
                "transition-opacity"
              )}
            >
              <TrafficSignal trafficSignalInstance={trafficSignal} />
              <button
                className="text-gray-500 hover:text-white transition-colors mt-4"
                onClick={() => deleteTrafficSignal(index)}
              >
                Delete
              </button>
            </div>
          );
        })}

        {trafficSignals.length === 0 && (
          <p className="text-gray-500">You&apos;ve deleted all the instances</p>
        )}
      </div>
      <button
        className="border-gray-700 border-2 text-gray-300 py-1 px-2 rounded-md hover:bg-white hover:text-black transition-colors"
        onClick={addNewTrafficSignal}
      >
        Add new instance
      </button>
    </div>
  );
}

export default Singleton;
