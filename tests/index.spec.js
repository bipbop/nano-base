const Base = require('../lib/index');
const { expect } = require('chai');

describe('testMe', () => {
  it('works', () => {
    const base = Base({ you: 'p' });
    base.define('are', 'a');
    base.my = 't';
    Object.assign(base, { love: 'y' });
    expect(base.config).deep.equals({ you:  'p' });
    expect(base.config.you).eq('p');
    expect(base.are).eq('a');
    expect(base.my).eq('t');
    expect(base.love).eq('y');
  });
});
