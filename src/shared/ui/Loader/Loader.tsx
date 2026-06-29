import Image, { ImageProps } from 'next/image'

type LoaderProps = {
    size?: number
} & Omit<ImageProps, "src" | "alt">

export const Loader = ({ size = 80, ...otherProps }: LoaderProps) => {
  return (
    <Image width={size} height={size} src="/logo_akela_loader.png" alt="loader" className="animate-spin" {...otherProps} />
  )
}
