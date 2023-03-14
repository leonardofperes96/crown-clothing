import { ProductsInterface } from "../contexts/products_context";

export const formatPrice = (number: number) => {
  const newNumber = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number / 100);

  return newNumber;
};

type UniqueValues = "category" | "company" | "colors";

export const getUniqueValues = (
  data: ProductsInterface[],
  type: UniqueValues
) => {
  let unique = data.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
