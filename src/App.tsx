import React from "react";
import "./App.scss";
import NestedRouteWrapper from "./routes/NestedRouteWrapper";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  var currentLang = i18n.language;
  return (
    <div className={currentLang.match("fa") ? "app_rtl" : ""}>
      <NestedRouteWrapper />;
    </div>
  );
}

export default App;
