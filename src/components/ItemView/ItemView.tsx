import { useEmployeesData } from "../../providers/EmployeesDataProvider";
import { useConfig } from "../../providers/ConfigProvider";
import Toolbar from "../Toolbar/Toolbar";
import Grid from "../Grid";
import Card from "../Card";
import Contact from "../Contact";

const ItemView = () => {
  const employees = useEmployeesData();
  const { state } = useConfig();

  return (
    <>
    <Toolbar />
        <Grid size={`${state.viewMode === "gallery" ? "sm:2 md:3 lg:4" : "sm:1 md:2 lg:2"}`}>
          {employees.value?.map((employee) => (
            <Card key={employee.name}>
              <Contact {...employee} asRow={state.viewMode === "list"} />
            </Card>
          ))}
        </Grid>
    </>
  );
};

export default ItemView;
