import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-400 h-full flex flex-col items-center">
      <div className="my-20 text-2xl font-medium">
        {t("My starter template")}
      </div>

      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
