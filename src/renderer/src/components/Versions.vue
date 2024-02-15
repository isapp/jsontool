<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import useModalEvents from '../modals/modalEvents'

type Version = {
  primary: {
    major: number
    minor: number
    patch: number
  }
  revision: string
}

const { ctaModal } = useModalEvents()
const versions = reactive({ ...window.electron.process.versions })
const { npm_package_version: appVersion } = window.electron.process.env
const getRemoteVersion = async () => await window.api.getRemoteVersion()

const compareVersions = (remote: Version, local: Version) => {
  if (
    remote.primary.major > local.primary.major ||
    remote.primary.minor > local.primary.minor ||
    remote.primary.patch > local.primary.patch ||
    (Object.values(remote.primary).join('.') === Object.values(local.primary).join('.') &&
      remote.revision > local.revision)
  ) {
    ctaModal({
      content: `Version ${Object.values(remote.primary).join('.')} is available. Would you like to download & update?`,
      action: new URL('https://github.com/isapp/jsontool/releases'),
      actionLabel: 'Download'
    })
  }
}

onMounted(async () => {
  const remoteVersion: Version = await getRemoteVersion()
  const parsedVersion: Version = await window.api.parseVersion(appVersion)
  compareVersions(remoteVersion, parsedVersion)
})
</script>

<template>
  <div class="versions">
    <p
      class="app-version"
      :title="`jsontool v${appVersion} | Electron v${versions.electron} | Chromium v${versions.chrome} | Node v${versions.node}`"
    >
      v{{ appVersion }}
    </p>
  </div>
</template>

<style scoped>
.versions {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px 0;
  font-family: 'Menlo', 'Lucida Console', monospace;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  border-top-left-radius: 22px;
  background-color: #202127;
  backdrop-filter: blur(24px);
}

.versions p {
  display: block;
  padding: 0 20px;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.8;
}
</style>
