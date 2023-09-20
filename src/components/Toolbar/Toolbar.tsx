import { useConfig } from "../../providers/ConfigProvider";

export const Toolbar: React.FC = () => {
  const { state, dispatch } = useConfig();
  return (
    <div>
      <input
        type="checkbox"
        onChange={() =>
          dispatch({
            type: "setViewMode",
            viewMode: state.viewMode === "gallery" ? "list" : "gallery",
          })
        }
      />
    </div>
  );
};

export default Toolbar;
