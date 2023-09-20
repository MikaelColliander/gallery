import "./App.css";
import EmployeesDataProvider from "./providers/EmployeesDataProvider";
import ItemView from "./components/ItemView";
import { ConfigProvider } from "./providers/ConfigProvider";

function App() {
  return (
    <ConfigProvider>
      <EmployeesDataProvider>
        <ItemView />
      </EmployeesDataProvider>
    </ConfigProvider>
  );
}

export default App;
