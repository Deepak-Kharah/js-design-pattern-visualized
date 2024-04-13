import { effect } from "@preact/signals";
import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrafficSignal as TrafficSignalType,
  type NormalTrafficSignal,
  type SingletonTrafficSignal,
} from "./implementation";
import style from "./traffic-signal.module.css";

interface TrafficSignalProps {
  trafficSignalInstance: NormalTrafficSignal | SingletonTrafficSignal;
  id: number;
}

function TrafficSignal(props: TrafficSignalProps) {
  const { trafficSignalInstance } = props;

  const [currentTrafficSignal, setCurrentTrafficSignal] = useState(
    trafficSignalInstance.trafficSignal.value
  );

  effect(() => {
    if (trafficSignalInstance.trafficSignal.value !== currentTrafficSignal) {
      setCurrentTrafficSignal(trafficSignalInstance.trafficSignal.value);
    }
  });

  return (
    <motion.div
      layout
      key={props.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        style[`current-signal-${trafficSignalInstance.trafficSignal}`],
        style["traffic-signal"],
        "flex px-1 gap-1 items-center flex-col rounded-3xl py-3"
      )}
    >
      <SignalLight
        color="red"
        onClick={() => trafficSignalInstance.setTrafficSignal("red")}
      />
      <SignalLight
        color="yellow"
        onClick={() => trafficSignalInstance.setTrafficSignal("yellow")}
      />
      <SignalLight
        color="green"
        onClick={() => trafficSignalInstance.setTrafficSignal("green")}
      />
    </motion.div>
  );
}

interface SignalLightProps {
  color: TrafficSignalType;
  onClick: () => void;
}

function SignalLight({ color, onClick }: SignalLightProps) {
  return (
    <button
      className={cn(style[color], "size-8 rounded-full")}
      onClick={onClick}
    ></button>
  );
}

export default TrafficSignal;
