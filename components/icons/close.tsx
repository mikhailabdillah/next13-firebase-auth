import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

const Close = ({ size = 24, ...rest }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M14.5,12l7-7A1.77,1.77,0,0,0,19,2.52h0l-7,7-7-7A1.77,1.77,0,0,0,2.52,5l7,7-7,7A1.77,1.77,0,0,0,5,21.48l7-7,7,7a1.77,1.77,0,0,0,2.5-2.5Z"
      />
    </svg>
  )
}

export default Close
