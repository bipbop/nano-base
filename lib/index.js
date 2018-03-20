class Base {
  constructor(config = {}) {
    this.config = config;
    this.defs = {};
  }

  define(name, value) {
    this.defs[name] = value;
  }
}

module.exports = (arg) => new Proxy(new Base(arg), {
  get(target, name) {
    return target[name] || target.defs[name];
  },
  set(target, name, value) {
    return target.defs[name] = value;
  },
});
