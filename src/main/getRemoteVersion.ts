export const parseVersion = (version: string) => {
  const [primary, revision] = version.split('-').map((v) => v.split('.'))

  return {
    primary: primary.reduce(
      (acc, v, i) => ({
        ...acc,
        //@ts-ignore - I know this is heinous, but I just wanted to know if I could do it
        [((j) => {
          switch (j) {
            case 0:
              return 'major'
            case 1:
              return 'minor'
            case 2:
              return 'patch'
          }
        })(i)]: parseInt(v)
      }),
      {}
    ),
    revision
  }
}

export const getRemoteVersion = async () => {
  const res = await fetch('https://raw.githubusercontent.com/isapp/jsontool/main/package.json')
  const { version } = await res.json()
  return parseVersion(version)
}
