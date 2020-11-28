declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare namespace __app {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

interface Window extends __app.Window {}

declare var window: Window
