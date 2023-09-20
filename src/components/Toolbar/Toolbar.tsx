import { useConfig } from "../../providers/ConfigProvider";
import Switch from "../Switch";
import Checkbox from "../Checkbox";
import TextField from "../TextField";
import "./toolbar.css";

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

  const handleFilterString = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    dispatch({
      type: "setFilterString",
      filterString: e.target.value,
    });
  };

  return (
    <div className="toolbar">
      <div className="toolbar-inner">
        <fieldset className="toolbar-fieldset">
          <legend className="toolbar-legend">Filter by office</legend>
          {offices.map((option) => (
            <Checkbox
              id={option}
              name={option}
              checked={state.filter?.includes(option) || false}
              label={option}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilter(e)
              }
            />
          ))}
        </fieldset>
        <TextField
          id="name-filter"
          label="Filter by name"
          placeholder="Start typing a name"
          value={state.filterString}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFilterString(e)
          }
        />
      </div>
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
    </div>
  );
};

export default Toolbar;
