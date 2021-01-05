function isTriangle(...args) {
  return args[0] + args[1] >= args[2]
      && args[1] + args[2] >= args[0]
      && args[2] + args[0] >= args[1];
}

export {
  isTriangle,
};
