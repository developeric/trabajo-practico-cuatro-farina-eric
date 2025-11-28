enum LogLevel {
  Info,
  Warning,
  Error,
}

function LogMessage(level: LogLevel, message: string) {
  console.log(`${level}
    ${message}`);
}

LogMessage(LogLevel.Info, "Mola Hundo chat")
