import React from "react";

export type ConfigProviderProps = { children: React.ReactNode };
export type ViewMode = "gallery" | "list";
export type ImageType = "wallOfLeet" | "portrait";
export type SortOption = "office" | "name" | undefined;
export type Filter = string[] | undefined;
export type FilterString = string | undefined;

export type Action = {
  type:
    | "setSortOption"
    | "setImageType"
    | "setViewMode"
    | "setOffices"
    | "setFilterString";
  viewMode?: ViewMode;
  imageType?: ImageType;
  filter?: Filter;
  filterString?: FilterString;
  sortOption?: SortOption;
};

export type Dispatch = (action: Action) => void;

export type State = {
  viewMode: ViewMode;
  imageType: ImageType;
  filter: Filter;
  filterString: FilterString;
  sortOption: SortOption;
};

export const ConfigStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export default ConfigStateContext;

function configReducer(state: State, action: Action) {
  const stateObj = {
    sortOption: state.sortOption,
    viewMode: state.viewMode,
    imageType: state.imageType,
    filter: state.filter,
    filterString: state.filterString,
  };

  switch (action.type) {
    case "setSortOption": {
      return Object.assign({ sortOption: action.sortOption }, stateObj);
    }
    case "setImageType": {
      return Object.assign({ imageType: action.imageType }, stateObj);
    }
    case "setViewMode": {
      return Object.assign( stateObj, { viewMode: action.viewMode });
    }
    case "setFilterString": {
      return Object.assign({ filterString: action.filterString }, stateObj);
    }
    case "setOffices": {
      return Object.assign({ filter: state.filter }, stateObj);
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [state, dispatch] = React.useReducer(configReducer, {
    viewMode: "gallery",
    imageType: "wallOfLeet",
    sortOption: undefined,
    filterString: undefined,
    filter: undefined,
  });
  const value = { state, dispatch };
  return (
    <ConfigStateContext.Provider value={value}>
      {children}
    </ConfigStateContext.Provider>
  );
}

export function useConfig() {
  const context = React.useContext(ConfigStateContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}