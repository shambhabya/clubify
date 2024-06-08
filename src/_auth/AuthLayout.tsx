import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/public/assets/images/side-img2.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat opacity-40"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
