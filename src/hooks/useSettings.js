import { SettingsContext } from "src/contexts/SettingContext";
import { useContext } from "react";

const useSettings = () => useContext(SettingsContext);

export default useSettings;
