export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number / 100);

  return newNumber;
};
