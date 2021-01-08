import { Tag } from '../types'

export function tag(content: string | undefined, element: JSX.Element): Tag {
  return content ? element : null
}
