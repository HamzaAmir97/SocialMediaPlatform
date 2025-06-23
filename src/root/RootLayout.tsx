import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Topbar from "@/components/ui/shared/Topbar";
import Bottombar from "@/components/ui/shared/Bottombar";
import LeftSidebar from "@/components/ui/shared/LeftSidebar";
import { useUserContext } from "@/context/AuthContext";

const RootLayout = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in"); // أو أي مسار لصفحة تسجيل الدخول
    }
  }, [user, navigate]);

  if (!user) {
    return null; // انتظر التوجيه
  }

  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
