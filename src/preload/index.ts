import { contextBridge, ipcRenderer, clipboard } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  query: async ({ path, json }) => await ipcRenderer.invoke('api.query', { path, json }),
  getRemoteVersion: async () => await ipcRenderer.invoke('api.getRemoteVersion'),
  parseVersion: async (version: string) => await ipcRenderer.invoke('api.parseVersion', version),
  openLink: async (link: string) => await ipcRenderer.invoke('api.openLink', link)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', { ...electronAPI, clipboard })
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = { ...electronAPI, clipboard }
  // @ts-ignore (define in dts)
  window.api = api
}
