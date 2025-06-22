import { Logger } from '../logger.service';

export class NoopLogger extends Logger {

  error(msg: string, ...data: any[]): void {
    // nothing
  }

  log(msg: string, ...data: any[]): void {
    // nothing
  }

  warn(msg: string, ...data: any[]): void {
    // nothing
  }
}
