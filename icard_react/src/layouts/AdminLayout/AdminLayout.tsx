import { FC, PropsWithChildren } from 'react'
import './AdminLayout.scss'

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
        <h2>AdminLayout</h2>

        { children }
    </div>
  )
}
