import {
  MdOutlineEmail,
  MdCall,
  MdOutlineShoppingCart,
  MdOutlineSearch,
} from "react-icons/md";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <div>
      <div className="bg-[#7E33E0] py-[15px] text-white">
        <div className="max-w-screen-xl  m-auto flex justify-between px-[30px]">
          <div className="flex gap-[66px]">
            <div className="flex gap-[12px] items-center">
              <MdOutlineEmail />
              <h1>info@ecommerce.mn</h1>
            </div>
            <div className="flex gap-[12px] items-center">
              <MdCall />
              <h1>77123456</h1>
            </div>
          </div>
          <div className="flex gap-[23px] ">
            <div className="flex gap-[12px] items-center">
              <h1>Нэвтрэх</h1>
              <FaRegUser />
            </div>
            <div className="flex gap-[12px] items-center">
              <h1>Хадгалах</h1>
              <FaRegHeart />
            </div>
            <div className="flex items-center">
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-screen-xl m-auto items-center ">
        <div className="flex items-center text-[#0D0E43] text-[34px] font-bold gap-[60px] ">
          <h1>Ecommerce</h1>
          <div className="mb-3 ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#FB2E86] ">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col gap-2">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Furnitue
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Clothes
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex text-white rounded border-[#E7E6EF] ">
          <input className="h-[40px] border" placeholder="" type="text" />
          <div className="bg-[#FB2E86] w-10 flex items-center justify-center ">
            <MdOutlineSearch size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
