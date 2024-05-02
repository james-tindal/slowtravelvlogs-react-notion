import { Block } from "notion-types"

export const Code = ({ block }: { block: Block}) =>
  <div
    className="notion-injected-html"
    dangerouslySetInnerHTML={{__html: block.properties.title}} />
