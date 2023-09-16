import { useEmployeesData } from "../../providers/EmployeesDataProvider";

const Card = () => {
  const employees = useEmployeesData();

  return (
    <ul>
      {employees.value?.map((employee) => (
        <li>{employee.name}</li>
      ))}
    </ul>
  );
};

export default Card;
