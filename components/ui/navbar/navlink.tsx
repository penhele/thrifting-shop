import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../navigation-menu";

const Navlink = () => {
  const navMenu = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link href={item.url}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navlink;
