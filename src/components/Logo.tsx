import Image from "next/image"

import pitakuLogoMark from '@/images/pitaku-logomark.svg'
import pitakuLogo from '@/images/pitaku-logo.svg'

export function Logo(props: any) {

  if(props.logotype === "logomark"){
    return (
      <Image 
        {...props}
        src={pitakuLogoMark}
        width={100}
        height={100}
        alt="pitaku-logo"
      />
    )
  }

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
