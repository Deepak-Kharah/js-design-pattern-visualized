"use client";
import { H2 } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import TitleSection from "@/components/TitleSection";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import TrafficSignal from "./TrafficSignal";
import { NormalTrafficSignal, SingletonTrafficSignal } from "./implementation";
import style from "./page.module.css";

function Singleton() {
  return (
    <>
      <TitleSection
        title={"Singleton Pattern"}
        body={
          <>
            <p>
              At its core, the{" "}
              <strong className="font-medium underline opacity-100">
                Singleton Pattern
              </strong>{" "}
              is about guaranteeing that there&apos;s only one instance of a
              class and providing a global point of access to that instance.
              It&apos;s like having a unique manager overseeing a particular
              aspect of your application, ensuring consistency and avoiding
              duplication of resources.
            </p>
            <br />
            <p>
              By following this pattern, we ensure that there&apos;s only one
              instance of the class throughout the application&apos;s lifecycle.
              This is particularly useful for managing shared resources, such as
              configuration settings, database connections, or logging
              mechanisms.
            </p>
            <br />
            <p>
              However, it&apos;s worth noting that while the Singleton Pattern
              provides global access to an instance, it can also introduce tight
              coupling and potential issues with testability. So, it&apos;s
              essential to weigh the benefits against the drawbacks and consider
              alternative patterns or architectural approaches when necessary.
            </p>
          </>
        }
      />
      <section className="divide-y divide-indigo-800">
        <TrafficSignalSection
          getInstance={NormalTrafficSignal.getInstance}
          title="Normal Traffic Signal"
          explaination={
            <>
              <p>
                When you click on these traffic lights, they light up
                independently. This behaviour holds even when you add new
                instances of traffic lights.
              </p>

              <br />
              <p>Come on, try it out. Change the lights by clicking on them.</p>
              <br />
              <p>
                This pattern is often scalable as it can work independently of
                other instances since it does not share resources like
                configuration. However, if your application requires context to
                function appropriately, you may need to pass them every time you
                use its methods.
              </p>
            </>
          }
        />
        <TrafficSignalSection
          getInstance={SingletonTrafficSignal.getInstance}
          title="Singleton Traffic Signal"
          explaination={
            <>
              <p>
                When you click on one of these traffic lights, it also updates
                the rest. This behaviour holds even when you add new instances
                of traffic lights, as we use the same instance of the traffic
                light.
              </p>
              <br />
              <p>
                This behaviour is due to the Singleton Pattern, which ensures
                that there is only one instance of the class throughout the app.
              </p>
              <br />
              <p>
                Some practical applications of the Singleton Pattern include
                building an SDK that requires initialization with some
                configuration. Once the user initializes the SDK, all its
                methods will have additional context from the configuration.
              </p>
            </>
          }
        />
      </section>
    </>
  );
}

interface TrafficSignalSectionProps<
  T extends NormalTrafficSignal | SingletonTrafficSignal
> {
  getInstance: () => T;
  title: string;
  explaination: React.ReactNode;
}

function TrafficSignalSection<
  T extends NormalTrafficSignal | SingletonTrafficSignal
>({ getInstance, title, explaination }: TrafficSignalSectionProps<T>) {
  return (
    <section className="bg-gradient-to-l from-indigo-950 to-blue-950 via-slate-900/20">
      <div className="max-w-7xl gap-10 sm:gap-16 flex flex-col items-center mx-auto px-7 py-16">
        <H2>{title}</H2>

        <div className="flex w-full flex-col sm:flex-row gap-10 sm:gap-16">
          <div className="flex flex-1 justify-center">
            <Paragraph>{explaination}</Paragraph>
          </div>
          <TrafficSignalModule getInstance={getInstance} title={title} />
        </div>
      </div>
    </section>
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
>({ getInstance }: TrafficSignalModuleProps<T>) {
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
    const newTrafficSignals = Array.from({ length: 3 }, () => {
      const trafficSignal = getInstance();
      trafficSignal.setTrafficSignal("red");
      return trafficSignal;
    });
    setTrafficSignals(newTrafficSignals);
  }

  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="flex gap-3 h-48 items-center">
        <AnimatePresence>
          {trafficSignals.map((trafficSignal, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  style["signal-instance"],
                  "transition-opacity"
                )}
              >
                <TrafficSignal
                  id={index}
                  trafficSignalInstance={trafficSignal}
                />
                <button
                  className="text-gray-500 hover:text-white transition-colors mt-4"
                  onClick={() => deleteTrafficSignal(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </AnimatePresence>
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
    </div>
  );
}

export default Singleton;
