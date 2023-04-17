/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";

const translate = (text: string) => {
  const { t, i18n } = useTranslation();

  return t(text);
};
export default translate;
