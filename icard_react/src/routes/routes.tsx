import { ClientLayout } from '../layouts'
import { Error404 } from '../pages'
import routesAdmin from'./routes.admin'
import routesClient from './routes.client'

const routes = [
    ...routesAdmin,
    ...routesClient,
    {
        path: '*',
        layout: ClientLayout,
        component: Error404
    },
]

export default routes