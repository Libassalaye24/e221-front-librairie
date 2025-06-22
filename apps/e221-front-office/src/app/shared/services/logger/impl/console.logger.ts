import {Logger} from "../logger.service";

export class ConsoleLogger extends Logger {
  error(msg: string, ...data: any[]): void {
    console.error(msg, data)
  }

  log(msg: string, ...data: any[]): void {
    console.log(msg, data)
  }

  warn(msg: string, ...data: any[]): void {
    console.warn(msg, data)
  }
}
