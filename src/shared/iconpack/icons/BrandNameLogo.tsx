import { SVGProps } from "../model/types"

const BrandNameLogo = ({ color, ...props }: SVGProps) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="71" height="32" viewBox="0 0 71 32" fill="none" {...props}>
    <path d="M46.2266 8.49219H43.4824V23.3357H52.4944V20.5915H46.2266V8.49219Z"
      fill={color || "currentColor"} />
    <path d="M32.2246 8.49219V23.3357H41.985V20.5915H34.9687V17.4263H38.7107V14.6666H34.9687V11.2364H41.985V8.49219H32.2246Z"
      fill={color || "currentColor"} />
    <path d="M14.6066 6H11.8469L6 26.0979H8.75972L9.96028 21.9193L15.776 19.3155L16.9453 23.307H19.7051L14.6066 6ZM13.2345 10.6776L14.9964 16.6648L10.9581 18.4735L13.2345 10.6776Z"
      fill={color || "currentColor"} />
    <path d="M60.6807 8.49219H57.7651L53.415 23.3045H56.1748L56.5957 21.8856L61.2576 19.8119L62.2711 23.3357H64.9996L60.6807 8.49219ZM59.2151 12.9047L60.4625 17.1613L57.5936 18.4398L59.2151 12.9047Z"
      fill={color || "currentColor"} />
    <path d="M31.2739 23.3357H28.1399L23.2286 17.1145L23.2753 23.3357H20.5156V8.49219H23.2753V14.1676L27.6254 8.49219H30.7282L25.4426 15.5553L31.2739 23.3357Z"
      fill={color || "currentColor"} />
  </svg>
}

export default BrandNameLogo
