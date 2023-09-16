import { useEmployeesData } from "../../providers/EmployeesDataProvider";

const ItemView = () => {
  const employees = useEmployeesData();

  return (
    <ul>
      {employees.value?.map((employee) => (
        <li>{employee.name}</li>
      ))}
    </ul>
  );
};

export default ItemView;
