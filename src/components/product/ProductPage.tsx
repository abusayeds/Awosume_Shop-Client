/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FetchProduct } from "../../utils/FetchProduct";

// Define the type for searchTerm
interface SearchTerm {
  name?: string;
  color?: string;
  category?: string;
  type?: string;
}

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>({});

  const handleClick = (category: string, value: string) => {
    setSearchTerm({
      ...searchTerm,
      category,
      name: value,
    });
  };

  const { data, isLoading } = FetchProduct(
    searchTerm.category,
    searchTerm.name
  );
  console.log(data);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="md:mt-40 mt-20 flex flex-col gap-4 justify-center items-center p-5">
      {data?.data?.map((item: any) => (
        <div key={item._id} className=" bg-blue-600 w-60 p-5 text-white mt-5">
          <p
            onClick={() => handleClick(item.category, item.name)}
            className="text-center"
          >
            Name: {item.name}
          </p>
          <img src={item.image} alt="" />
          <p
            onClick={() => handleClick(item.category, item.color)}
            className="text-center"
          >
            Color: {item.color}
          </p>

          <p
            onClick={() => handleClick(item.category, item.type)}
            className="text-center"
          >
            ProductType: {item.type}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
