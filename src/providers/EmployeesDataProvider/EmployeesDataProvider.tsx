import React, { ReactNode } from "react";
import { Employee } from "./EmployeeTypes";
import { apiRequest } from "../apiRequest";

type ContextState =
  | { status: "LOADING" | "ERROR"; value: undefined }
  | { status: "LOADED"; value: Employee[] };

const Context = React.createContext<ContextState | null>(null);

export const useEmployeesData = (): ContextState => {
  const contextState = React.useContext(Context);
  if (contextState === null) {
    throw new Error("useItemData must be used within a ItemDataProvider tag");
  }
  return contextState;
};

export const EmployeesDataProvider: React.FC<{
  [x: string]: unknown;
  children: ReactNode;
}> = (props) => {
  const [state, setState] = React.useState<ContextState>({ status: "LOADING", value: undefined });

  React.useEffect(() => {
    setState({ status: "LOADING", value: undefined });

    (async (): Promise<void> => {
    
      const result = await apiRequest("https://api.1337co.de/v3/employees", {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      });
    
    // const result = await apiRequest("./employees.json");

      if (result) {
        setState({
          status: "LOADED",
          value: result.filter((employee:Employee) => employee.office),
        });
      } else {
        setState({ status: "ERROR", value: undefined });
      }
    })();
  }, [props.itemId]);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export default EmployeesDataProvider
