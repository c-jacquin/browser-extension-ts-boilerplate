declare module 'node-zip-dir' {
  export function zip(dir: string, file: string): Promise<void>
  export function unzip(file: string, dir: string): Promise<void>
}