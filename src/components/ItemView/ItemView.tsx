import { useEmployeesData } from "../../providers/EmployeesDataProvider";
import { useConfig } from "../../providers/ConfigProvider";
import Toolbar from "../Toolbar/Toolbar";
import Grid from "../Grid";
import Card from "../Card";
import Contact from "../Contact";

const ItemView = () => {
  const { state } = useConfig();
  const employees = useEmployeesData()
    .value?.filter((employee) => state.filter.includes(employee.office))
    .filter((employee) => employee.name.toLowerCase().includes(state.filterString.toLowerCase()));

  return (
    <>
      <Toolbar />
      <h1 className="main-heading">The Tretton37 Crew</h1>
      <Grid
        size={`${
          state.viewMode === "gallery" ? "sm:2 md:3 lg:4" : "sm:1 md:2 lg:2"
        }`}
      >
        {employees?.map((employee) => (
          <Card key={employee.name}>
            <Contact {...employee} asRow={state.viewMode === "list"} />
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default ItemView;
