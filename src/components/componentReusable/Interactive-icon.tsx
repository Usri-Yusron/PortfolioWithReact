import IconCloud from "../ui/interactive-icon";

const slugs = [
  "php",
  "laravel",
  "python",
  "sql",
  "tailwind",
  "bootstrap",
  "mysql",
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function InteractiveIcons() {
  return (
    <div >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
