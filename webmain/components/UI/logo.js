import NextLink from 'next/link'
import Image from 'next/image'
import logo from '../../public/favicon/logo1080.png'

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Image src={logo} alt="logo" width="60" height="60" />
    </NextLink>
  )
}

export default Logo
