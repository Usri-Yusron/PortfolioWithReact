import {
    Github,
    Instagram,
    Linkedin,
    MessageCircle,
    LogOut,
  } from "lucide-react"
  
  import { Button } from "../ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu"
  
  export function CloseButton() {

    const links = [
      { href: "http://github.com/Usri-Yusron", target: "_blank", text: "Github", icon: Github },
      { href: "http://www.linkedin.com/in/muhamad-usriyusron", target: "_blank", text: "Linkedin", icon: Linkedin },
      { href: "https://instagram.com/usri.yusron", target: "_blank", text: "Instagram", icon: Instagram },
      { href: "https://wa.me/+6283827406460", target: "_blank", text: "Whatsapp", icon: MessageCircle },
    ];
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white dark:text-black">Hubungi saya</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
          <DropdownMenuLabel>My Social Media Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />  
          {links.map((link, index) => (
            <a key={index} href={link.href} target={link.target} rel="noopener noreferrer">
              <DropdownMenuItem>
                <link.icon className="mr-2 h-4 w-4" />
                <span>{link.text}</span>
              </DropdownMenuItem>              
            </a>
          ))}
          <DropdownMenuSeparator />
          
          <a href="/">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Back to Top</span>
            <DropdownMenuShortcut>⇧⇧⇧</DropdownMenuShortcut>
          </DropdownMenuItem>
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  