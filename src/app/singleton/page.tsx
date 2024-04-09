"use client";

import React, { useState } from "react";
import { NormalTrafficSignal, SingletonTrafficSignal } from "./implementation";
import TrafficSignal from "./TrafficSignal";
import style from "./page.module.css";
import classNames from "classnames";

function Singleton() {
  return (
    <>
      <section>
        <h1 className="text-5xl py-5 px-5 leading-snug">Singleton Pattern</h1>
        <div className="max-w-xl px-5 text-justify mx-auto font-light text-slate-400">
          <p>
            The{" "}
            <strong className="font-medium text-slate-300">
              Singleton Pattern
            </strong>{" "}
            is a design pattern that ensures a class has only one instance and
            provides a global point of access to that instance. This pattern is
            particularly useful when you want to limit a class`&rsquo;`s
            instantiation to a single object, which is commonly used in
            scenarios such as managing resources, configuration settings,
            logging, caching, and more.
          </p>
          <br />
          <p>
            In this example, we have Normal traffic lights and Singleton traffic
            lights. You can toggle the normal traffic lights separately, whereas
            the Singleton traffic lights will switch lights for all instances.
          </p>
          <br />
          <p>
            Try adding and deleting new instances and toggling lights to see
            what happens.
          </p>
        </div>
      </section>
      <div className="divide-y divide-indigo-800">
        <TrafficSignalModule
          getInstance={NormalTrafficSignal.getInstance}
          title="Normal Traffic Signal"
        />
        <TrafficSignalModule
          getInstance={SingletonTrafficSignal.getInstance}
          title="Singleton Traffic Signal"
        />
      </div>
    </>
  );
}

interface TrafficSignalModuleProps<
  T extends NormalTrafficSignal | SingletonTrafficSignal
> {
  getInstance: () => T;
  title: string;
}

function TrafficSignalModule<
  T extends NormalTrafficSignal | SingletonTrafficSignal
>({ getInstance, title }: TrafficSignalModuleProps<T>) {
  const [trafficSignals, setTrafficSignals] = useState<T[]>([
    getInstance(),
    getInstance(),
    getInstance(),
  ]);

  function addNewTrafficSignal() {
    setTrafficSignals((prevState) => {
      if (prevState.length < 5) {
        const newTrafficSignal = getInstance();
        return [...prevState, newTrafficSignal];
      }

      return prevState;
    });
  }

  function deleteTrafficSignal(index: number) {
    const newTrafficSignals = [...trafficSignals];
    newTrafficSignals.splice(index, 1);
    setTrafficSignals(newTrafficSignals);
  }

  function resetTrafficSignals() {
    setTrafficSignals([getInstance(), getInstance(), getInstance()]);
  }

  return (
    <section className=" flex flex-col gap-6 items-center py-5 bg-gradient-to-l from-indigo-950 to-blue-950 via-slate-950">
      <h2 className="text-xl">{title}</h2>
      <div className="flex gap-3 h-48 items-center">
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
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          disabled={trafficSignals.length >= 5}
          className="px-4 py-2 text-sm font-light border  rounded-s-lg  focus:z-10 focus:ring-2  bg-gray-800 border-gray-700 text-slate-300 hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white disabled:text-gray-700 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:hover:text-gray-700 "
          onClick={addNewTrafficSignal}
        >
          Add new instance
        </button>

        <button
          className="px-4 py-2 text-sm font-light border  rounded-e-lg focus:z-10 focus:ring-2  bg-gray-800 border-gray-700 text-slate-300 hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white"
          onClick={resetTrafficSignals}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Singleton;
