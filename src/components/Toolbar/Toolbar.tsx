import { useConfig } from "../../providers/ConfigProvider";
import Switch from "../Switch";
import Checkbox from "../Checkbox/Checkbox";

export const Toolbar: React.FC = () => {
  const { state, dispatch } = useConfig();

  const offices = ["Stockholm", "Lund", "Ljubljana", "Helsingborg", "Borlänge"];

  const handleViewMode = () => {
    dispatch({
      type: "setViewMode",
      viewMode: state.viewMode === "gallery" ? "list" : "gallery",
    });
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setOffices",
      filter: state.filter.includes(e.target.value)
        ? state.filter.filter((name) => name !== e.target.value)
        : [...state.filter, e.target.value],
    });
  };

  return (
    <div>
      <Switch
        btn1={{
          active: state.viewMode === "gallery",
          primary: true,
          children: "Gallery",
          onClick: handleViewMode,
        }}
        btn2={{
          active: state.viewMode === "list",
          primary: true,
          children: "List",
          onClick: handleViewMode,
        }}
      />
      <div>
        {offices.map(option => (
        <Checkbox
          id={option}
          name={option}
          checked={state.filter?.includes(option) || false}
          label={option}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
        />))}
      </div>
    </div>
  );
};

export default Toolbar;
