export const formatAmount = (input) => {
  if (!input) return '';

  const formattedNumber = input.replace(/[^0-9.]/g, '');
  if (!formattedNumber) return '';

  // Convert to currency format
  const convertedInput = new Intl.NumberFormat().format(formattedNumber);
  return convertedInput;
};
