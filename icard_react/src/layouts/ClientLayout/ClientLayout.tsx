import { FC, PropsWithChildren } from 'react'
import './ClientLayout.scss'

export const ClientLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div>
        <h2>ClientLayout</h2>

        { children }
    </div>
  )
}