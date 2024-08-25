import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import DownNevber from "./DownNevber";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TopNavber = () => {
  const [open, setOpen] = useState(false);
 const data1 = {open}
 const hendleOpen = () => {
    setOpen(false)
 }
  return (
    <section>
      <main className=" h-full flex justify-between items-center ">
        <div className="flex justify-between gap-3 w-full  items-center py-8 p-5 ">
          <div className=" md:hidden">
            {open ? (
              <IoClose onClick={() => setOpen(false)} className="text-xl"></IoClose>
            ) : (
              <CiMenuBurger
                onClick={() => setOpen(true)}
                className="text-xl"
              ></CiMenuBurger>
            )}
          </div>
          <NavLink to= '/' className=" uppercase md:text-3xl text-sm "> Awosume_Shop</NavLink>
        </div>
        <div className="  flex justify-around md:gap-8 gap-4  font-normal text-sm p-5 ">
          <ul className="flex justify-start items-center gap-2">
            <p className=" md:block hidden"> Search</p>
            <CiSearch className="text-white text-2xl font-bold"></CiSearch>
          </ul>
          <ul className="flex justify-start items-center gap-2">
            <p className=" md:block hidden">Acoount</p>
            <CiUser className="text-white text-2xl font-bold"></CiUser>
          </ul>

          <ul className="flex justify-start items-center gap-2">
            <p className=" md:block hidden"> Cart</p>
            <CiShoppingCart className="text-white  text-2xl font-bold"></CiShoppingCart>
          </ul>
        </div>
      </main>
      <DownNevber data = {data1} onClose ={hendleOpen} ></DownNevber>
    </section>
  );
};

export default TopNavber;
