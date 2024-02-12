import { JSONPath } from 'jsonpath-plus'

export const jsonPath = ({ path, json }) => {
  return JSONPath({
    path,
    json: JSON.parse(json)
  })
}
