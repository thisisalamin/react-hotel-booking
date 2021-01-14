import { Router } from "@reach/router"
import Home from '../pages/home'

const AppRouter = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    )
}

export default AppRouter

