const safeParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};

export const versionLog = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(
      'background: #FA6400;color: #fff;padding: 2px 6px;border-radius: 4px;',
      `${safeParse(VERSION)}`
    );
  }
};

export * as editor from './App';
