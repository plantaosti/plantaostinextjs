import React, { ComponentPropsWithRef } from 'react'

type Logoprops = ComponentPropsWithRef<'svg'>
function IconePlantao({ ...rest }: Logoprops) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="24"
      viewBox="0 0 38 48"
    >
      <path d="M36.033 35.124a4.768 4.768 0 01-1.552-3.508V22.54a.911.911 0 00-1.823 0v9.075c0 1.838.782 3.608 2.145 4.854.49.448.772 1.085.772 1.749a2.372 2.372 0 01-2.37 2.37H4.767a2.372 2.372 0 01-2.37-2.37c0-.664.282-1.3.772-1.749a6.595 6.595 0 002.145-4.854V21.083c0-7.538 6.133-13.672 13.672-13.672 2.073 0 4.116.472 5.965 1.369a6.703 6.703 0 00-1.015 3.553 6.752 6.752 0 006.744 6.745 6.752 6.752 0 006.745-6.745 6.752 6.752 0 00-6.745-6.745 6.719 6.719 0 00-4.532 1.754 15.455 15.455 0 00-4.32-1.49 3.352 3.352 0 00.53-1.813A3.376 3.376 0 0018.986.667a3.376 3.376 0 00-3.372 3.372c0 .666.195 1.288.53 1.812C8.953 7.189 3.49 13.51 3.49 21.083v10.533a4.768 4.768 0 01-1.552 3.508A4.202 4.202 0 00.575 38.22a4.197 4.197 0 004.192 4.192h8.457a5.842 5.842 0 005.762 4.922 5.842 5.842 0 005.762-4.922h8.457a4.197 4.197 0 004.193-4.192 4.202 4.202 0 00-1.365-3.095zM30.68 7.411a4.927 4.927 0 014.922 4.922 4.927 4.927 0 01-4.922 4.922 4.927 4.927 0 01-4.922-4.922 4.927 4.927 0 014.922-4.922zM18.986 2.49c.854 0 1.55.696 1.55 1.55 0 .854-.696 1.55-1.55 1.55-.854 0-1.55-.696-1.55-1.55 0-.854.696-1.55 1.55-1.55zm0 43.021a4.017 4.017 0 01-3.905-3.099h7.81a4.017 4.017 0 01-3.905 3.1z"></path>
    </svg>
  )
}

export default IconePlantao
