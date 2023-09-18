import { useEmployeesData } from "../../providers/EmployeesDataProvider";
import Grid from "../Grid";
import Card from "../Card";
import Contact from "../Contact";

const ItemView = () => {
  const employees = useEmployeesData();

  return (
    <Grid size="sm:2 md:3 lg:4">
      {employees.value?.map((employee) => (
        <Card>
            <Contact
                {...employee}
            />
        </Card>
      ))}
    </Grid>
  );
};

export default ItemView;
