import { setTheme } from "@fluentui/web-components";
import { teamsLightV21Theme, teamsDarkV21Theme } from "@fluentui/tokens";
import "@fluentui/web-components/button.js";
import { isDarkMode } from "./base/theme";

const init = () => {
  setTheme(isDarkMode() ? teamsDarkV21Theme : teamsLightV21Theme);
};

init();
