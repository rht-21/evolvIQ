"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer group"
    >
      {theme === "dark" ? (
        <IconSun
          stroke={1.5}
          className="text-foreground/70 duration-150 group-hover:text-foreground"
          size={20}
        />
      ) : (
        <IconMoon
          stroke={1.5}
          className="text-foreground/70 duration-150 group-hover:text-foreground"
          size={20}
        />
      )}
    </button>
  );
};

export default ThemeToggle;