import './App.css'
import EmployeesDataProvider from './providers/EmployeesDataProvider'
import ItemView from './components/Card/Card'

function App() {
  return (
    <EmployeesDataProvider>
      <ItemView />
    </EmployeesDataProvider>
  )
}

export default App
