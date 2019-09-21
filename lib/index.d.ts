declare global {
  export namespace Nano {

    interface Config {[key: string]: any}

    interface Interface extends Config {
      define<T>(name: string, value: T): void;
    }
  }
}
export default function (config?: Nano.Config): Nano.Interface