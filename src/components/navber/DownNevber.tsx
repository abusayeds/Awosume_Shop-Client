/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import {
  useCategoryQuery,
  useNavberNameQuery,
} from "../../redux/features/navberNames/navberName-Api";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FetchProduct } from "../../utils/FetchProduct";

const DownNevber = (data1: any, onClose: any) => {
  const open = data1.data.open;
  const [dropDown, setDropDown] = useState<string | null>(null);
  const { data } = useNavberNameQuery(undefined);
  const [hoveredItem, setHoveredItem] = useState<string | false>(false);
  const [delayedHover, setDelayedHover] = useState<string | false>(false);
  const [categoryItems, setCategoeyItems] = useState("");
 const {isLoading} = FetchProduct(categoryItems, "")
  const { data: categoryData, refetch: fetchCategory } = useCategoryQuery(
    hoveredItem || "",
    { skip: !hoveredItem }
  );

  useEffect(() => {
    if (hoveredItem) {
      fetchCategory();
      setDelayedHover(hoveredItem);
    }
  }, [hoveredItem, fetchCategory]);

  useEffect(() => {
    let timeoutId: any;
    if (!hoveredItem) {
      timeoutId = setTimeout(() => setDelayedHover(false), 200);
    }
    return () => clearTimeout(timeoutId);
  }, [hoveredItem]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const toggleDropDown = (itemId: string) => {
    if (dropDown === itemId) {
      setDropDown(null);
    } else {
      setDropDown(itemId);
    }
  };

  return (
    <main className="h-full ">
      <section className="hidden md:flex flex-wrap justify-center items-center gap-8 p-5">
        {data?.data?.map((item: any) => (
          <div
            key={item._id}
            className="relative"
            onMouseEnter={() => setHoveredItem(item._id)}
            onMouseLeave={() => setHoveredItem(false)}
          >
            <div className="relative pb-1 group">
              <span className="hover:text-designColor transition duration-1000 ease-out">
                {item.name}
              </span>
              <span
                className={`${
                  hoveredItem === item._id
                    ? "absolute left-1/2 bottom-0 block h-[2px] bg-designColor transition-all duration-1000 ease-out transform -translate-x-1/2  w-full"
                    : "absolute left-1/2 bottom-0 block h-[2px] bg-designColor transition-all duration-1000 ease-out transform -translate-x-1/2 group-hover:w-full w-0"
                }`}
              />
            </div>

            {delayedHover === item._id && (
              <div
                className="fixed left-0 top-auto bottom-auto w-screen bg-black opacity-100 transition-opacity duration-1000 z-50 px-10 lg:p-10"
                style={{
                  transitionDuration: "1s",
                  overflow: "hidden",
                  maxHeight: "100vh",
                }}
              >
                <div className="flex gap-10 justify-around p-5">
                  {categoryData?.data?.map((category: any, index: number) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div>
                        <p className="font-bodyfont font-semibold text-gray-300 hover:text-red-500 duration-500">
                          {category.subCategory}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        {Array.from({ length: 10 }, (_, i) => (
                          <NavLink
                            key={i}
                            onClick={() =>
                              setCategoeyItems(category[`category${i + 1}`])
                            }
                            to="productPages"
                            className="hover:text-designColor duration-500 hover:underline"
                          >
                            <p
                              className=" text-white"
                              onClick={() => setDelayedHover(false)}
                            >
                              {" "}
                              {category[`category${i + 1}`]}
                            </p>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* small device */}
      <section className="md:hidden block relative">
        <div
          className={`w-screen h-screen flex flex-col absolute bg-black transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {data?.data?.map((item: any) => (
            <div key={item._id} className="p-4">
              <div>
                <div
                  onMouseEnter={() => setHoveredItem(item._id)}
                  onClick={() => toggleDropDown(item._id)}
                  className="flex justify-between items-center"
                >
                  <p className="font-titlefont text-1xl ">{item.name}</p>
                  {dropDown === item._id ? (
                    <IoIosArrowUp className="  text-2xl"></IoIosArrowUp>
                  ) : (
                    <IoIosArrowDown className="  text-2xl"></IoIosArrowDown>
                  )}
                </div>

                {dropDown === item._id && (
                  <div className="transition-all duration-500 overflow-y-auto  h-96 scrollbar-thin  scrollbar-thumb-gray-50 py-4 grid grid-cols-2 sm:grid-cols-3 gap-5">
                    {categoryData?.data?.map((category: any, index: number) => (
                      <div key={index} className="flex flex-col gap-4">
                        <div>
                          <p className="font-bodyfont font-semibold text-gray-300 hover:text-red-500 duration-500">
                            {category.subCategory}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          {Array.from({ length: 10 }, (_, i) => (
                            <NavLink
                              key={i}
                              onClick={() =>
                                categoryItem(category[`category${i + 1}`])
                              }
                              to="productPages"
                              className="hover:text-designColor duration-500 hover:underline"
                            >
                              <p className=" text-white" onClick={onClose}>
                                {" "}
                                {category[`category${i + 1}`]}
                              </p>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* small device */}
    </main>
  );
};

export default DownNevber;
