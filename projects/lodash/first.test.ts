import first from './first';

describe('first', () => {
  it('should export the default function from ./head', () => {
    expect(first).toBeInstanceOf(Function);
  });
});
