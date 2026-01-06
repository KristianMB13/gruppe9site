import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './router'


function App() {
  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </HashRouter>
  )
}

export default App