import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "@/styles/app.css?url";
import cupcakeAppCss from "@/styles/theme/cupcake.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Portal",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      import.meta.env.VITE_FLAVOUR === "cupcake" ? {
        rel: "stylesheet",
        href: cupcakeAppCss,
      } : undefined,
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme={import.meta.env.VITE_FLAVOUR}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
