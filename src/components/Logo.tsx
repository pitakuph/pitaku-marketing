import Image from "next/image"

import pitakuLogo from '@/images/pitaku-logo.svg'

export function Logo(props: any) {
  return (
    <Image 
      {...props}
      src={pitakuLogo}
      width={100}
      height={100}
      alt="pitaku-logo"
    />
    

  )
}
