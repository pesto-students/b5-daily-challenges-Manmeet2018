const curry = (func) => function resolver(...args) {
  if (args.length === func.length) return func.apply(this, args);
  return (...args2) => resolver.apply(this, args.concat(args2));
};

export {
  curry,
};
