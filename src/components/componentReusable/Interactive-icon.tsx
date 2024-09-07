import GradualSpacing from "../ui/gradual-spacing";
import IconCloud from "../ui/interactive-icon";

const slugs = [
  "php",
  "laravel",
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
    <div className="container mx-auto px-4" >
      <GradualSpacing 
        text="technologies that I can use"
      />
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
