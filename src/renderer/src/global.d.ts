import { ElectronAPI } from '@electron-toolkit/preload'

interface Clipboard {
  clipboard: any
}

interface API {
  query: any
  getRemoteVersion: any
  parseVersion: any
  openLink: any
}

declare global {
  interface Window {
    api: API
    electron: ElectronAPI & Clipboard
  }
}
