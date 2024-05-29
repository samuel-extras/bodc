import "../App.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="overflow-hidden font-geomGraphic">
      <Header />
      <Outlet />
      <Footer />
      <div className="bg-[#282828] py-5 mx-auto">
        <p className="text-sm text-center text-[#ffffffde]">
          © 2024 Bookodc. All Rights Reserved
        </p>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </main>
  ),
});
