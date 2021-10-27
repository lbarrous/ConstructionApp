import Image from 'next/image'

const ImageLoader = ({ src, width }: any) => {
  return `${src}/${width}/${width}`
}

type LogoProps = {
    logoPath: string;
}

export const Logo = (props: LogoProps) => {
    const { logoPath } = props;
  return (
    <Image
      loader={ImageLoader}
      src={logoPath}
      alt="Kitten"
      width={75}
      height={75}
    />
  )
}