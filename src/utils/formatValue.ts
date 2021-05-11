const formatValue = (value: number): string => {
  const formated_value = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
  return formated_value.toString()
}
export default formatValue;
