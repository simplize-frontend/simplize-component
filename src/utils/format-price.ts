// import * as d3 from 'd3';

export const formatPriceUSD = (price: number | bigint) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    price
  );

export const formatPriceVND = (input: number | string, isTrunc = true) => {
  if (!input) return '';
  input = isTrunc ? Math.trunc(Number(input)) : input;
  return input
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPriceDotVND = (input: number | string, isTrunc = true) => {
  if (!input) return '';
  input = isTrunc ? Math.trunc(Number(input)) : input;
  return input
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const formatPriceShort = (
  value: number,
  digits: any = 2,
  isTrunc: any = true
) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'Tr' },
    { value: 1e9, symbol: 'T' },
  ];
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(value) >= item.value;
    });
  return item
    ? formatPriceVND((value / item.value).toFixed(digits), isTrunc) +
        item.symbol
    : '0';
};

export const formatPriceShort2 = (
  value: number,
  digits: any = 2,
  isTrunc: any = true,
  min = 100000000
) => {
  if (value >= min) {
    return formatPriceShort(value, digits, isTrunc);
  }
  return formatPriceVND(value, isTrunc);
};

export const formatPriceShort3 = (value: number, digits: any = 1) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'Tr' },
    { value: 1e9, symbol: 'T' },
  ];
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(value) >= item.value;
    });

  return item
    ? Math.round((value / item.value) * Math.pow(10, digits)) /
        Math.pow(10, digits) +
        item.symbol
    : '0';
};

export const unFormatPrice = (priceFormat: number | string) => {
  if (!priceFormat) {
    return 0;
  }
  return Number(priceFormat.toString().replace(/[^0-9]+/g, ''));
};

export const formatPercent = (percent = 0) => {
  let result = '0%';
  const isNumber = typeof percent === 'number';
  const isString = typeof percent === 'string';
  const isNotNaN = !Number.isNaN(parseFloat(`${percent}`));

  if ((isNumber || isString) && isNotNaN) {
    result = `${
      percent % 0.1 === 0
        ? percent
        : percent % 0.01 === 0
        ? percent.toFixed(1)
        : percent.toFixed(2)
    }%`;
  }
  return result;
};

export const getFinalValue = (value: number) => {
  const digit = getDigitFromValue(value);

  if (value < 10) {
    return value.toFixed(digit);
  }

  if (value < 100) {
    return value.toFixed(digit);
  }

  if (value < 1000) {
    return value.toFixed(digit);
  }

  return value.toFixed(digit);
};

export const getDigitFromValue = (value: number) => {
  const absValue = Math.abs(value);
  if (absValue < 10) {
    return 3;
  }

  if (absValue < 100) {
    return 2;
  }

  if (absValue < 1000) {
    return 1;
  }

  return 0;
};

export const formatPrice = (value: number | string) => {
  if (!Number(value)) {
    return `0`;
  }

  value = value.toString();
  const priceNumber = parseFloat(value);
  const absValue = Math.abs(priceNumber);

  let digit: number;

  if (absValue < 0.0000001) {
    // 0.00000009876
    digit = 0;
  } else if (absValue < 0.000001) {
    // 0.0000009876
    digit = 10;
  } else if (absValue < 0.00001) {
    // 0.000009876
    digit = 9;
  } else if (absValue < 0.0001) {
    // 0.00009876
    digit = 8;
  } else if (absValue < 0.001) {
    // 0.0009876
    digit = 7;
  } else if (absValue < 0.01) {
    // 0.009876
    digit = 6;
  } else if (absValue < 0.1) {
    // 0.09876
    digit = 5;
  } else if (absValue < 1) {
    // 0.9876
    digit = 4;
  } else if (absValue < 10) {
    // 9.876
    digit = 3;
  } else if (absValue < 100) {
    // 98.76
    digit = 2;
  } else if (absValue < 1000) {
    // 987.6
    digit = 1;
  } else {
    // 9876
    digit = 0;
  }

  const formattedPrice = priceNumber.toLocaleString('en-US', {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  });

  return formattedPrice;
};
