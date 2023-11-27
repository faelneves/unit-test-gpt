import setToString from './setToString';

describe('setToString', () => {
  it('should set the toString method of func to return string', () => {
    const func = () => console.log('Hello World');
    const string = 'This is a string representation';

    setToString(func, string);

    expect(func.toString()).toBe(string);
  });

  it('should return the modified func', () => {
    const func = () => console.log('Hello World');
    const string = 'This is a string representation';

    const modifiedFunc = setToString(func, string);

    expect(modifiedFunc).toBe(func);
  });
});
