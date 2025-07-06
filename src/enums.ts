export enum LogLevel  {
    DEBUG,
    INFO,
    WARN,
    ERROR,
  };
  
/**
 * name
 */
export function log(opts: { globalLogLevel: LogLevel; level: LogLevel; message: string }) {
    if (opts.level >= opts.globalLogLevel) {
      console.log(opts.message);
    }
  }