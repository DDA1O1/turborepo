import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Providers } from "../../components/providers";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <Providers>
      <div className="font-sans antialiased">
        <Outlet />
      </div>
    </Providers>
  );
}
