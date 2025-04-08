import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [theme, setTheme] = useState<"light" | "dark" | "cupcake">("light");

  function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedTheme = event.target.value as "light" | "dark" | "cupcake";
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }

  console.log(import.meta.env);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <span>Current Theme: {theme}</span>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="border rounded p-2"
        >
          <option value="">Default</option>
          {import.meta.env.VITE_FLAVOUR !== "cupcake" && (
            <>
              <option value="default">Light</option>
              <option value="default-dark">Dark</option>
            </>
          )}
          {(import.meta.env.VITE_FLAVOUR === "cupcake" ||
            import.meta.env.DEV) && (
            <>
              <option value="cupcake">cupcake</option>
              <option value="cupcake-dark">cupcake</option>
            </>
          )}
        </select>
      </div>
      <h1>Hello {import.meta.env.VITE_FLAVOUR}</h1>
    </div>
  );
}
