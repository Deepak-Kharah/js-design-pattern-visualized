import { Signal, signal } from "@preact/signals-react";

export type TrafficSignal = "red" | "yellow" | "green";

export class NormalTrafficSignal {
  trafficSignal: Signal<TrafficSignal> = signal("red");

  private constructor() {}

  /**
   * Returns an instance of the TrafficSignalNormal class.
   * @returns An instance of the TrafficSignalNormal class.
   */
  static getInstance(): NormalTrafficSignal {
    return new NormalTrafficSignal();
  }

  /**
   * Sets the traffic signal for the singleton instance.
   * @param {TrafficSignal} trafficSignal - The traffic signal to set.
   */
  setTrafficSignal(trafficSignal: TrafficSignal) {
    this.trafficSignal.value = trafficSignal;
  }
}

export class SingletonTrafficSignal {
  private static instance: SingletonTrafficSignal | null = null;
  trafficSignal: Signal<TrafficSignal> = signal("red");

  /**
   * Represents the implementation of a singleton class.
   * @hideconstructor
   */
  private constructor() {}

  /**
   * Returns the singleton instance of the TrafficSignalSingleton class.
   * If the instance does not exist, it creates a new instance and returns it.
   * @returns The singleton instance of the TrafficSignalSingleton class.
   */
  static getInstance() {
    if (!SingletonTrafficSignal.instance) {
      SingletonTrafficSignal.instance = new SingletonTrafficSignal();
    }
    return SingletonTrafficSignal.instance;
  }

  /**
   * Sets the traffic signal for the singleton instance.
   * @param {TrafficSignal} trafficSignal - The traffic signal to set.
   */
  setTrafficSignal(trafficSignal: TrafficSignal) {
    this.trafficSignal.value = trafficSignal;
  }
}
