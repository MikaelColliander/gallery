import './App.css'
import EmployeesDataProvider from './providers/EmployeesDataProvider'
import ItemView from './components/ItemView'

function App() {
  return (
    <EmployeesDataProvider>
      <ItemView />
    </EmployeesDataProvider>
  )
}

export default App
