/* eslint-disable import/no-unused-modules */
const safeParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};

export default () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(
      `%c@zhuba/md-editor`,
      'background: #FA6400;color: #fff;padding: 2px 6px;border-radius: 4px;',
      `${safeParse(VERSION)}`,
    );
  }
};
