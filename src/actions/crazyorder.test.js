
describe('crazy order functionality', () => {
  const crazyOrder = (values) => {
    const median = Math.floor((values[0] + values[values.length - 1]) / 2);
    return values
      .slice(0, values.length - 1)
      .reduce((p, n, i) => (
        i % 2 === 0 ? p.concat(p[p.length - 1] + i + 1) : p.concat(p[p.length - 1] - i - 1)
      ), [median]);
  }

  it('should do the crazy order with even records', () => {
    const b = crazyOrder([25, 26, 27, 28, 29, 30]);
    expect(b).toEqual([27, 28, 26, 29, 25, 30]);
    expect(b === [28, 29, 27, 30, 26, 31, 25]).toBeFalsy();

  });
  it('should do the crazy order with odd records', () => {
    const b = crazyOrder([25, 26, 27, 28, 29, 30, 31]);
    expect(b).toEqual([28, 29, 27, 30, 26, 31, 25]);
    expect(b === [28, 29, 27, 30, 26, 31, 25, 32]).toBeFalsy();
  });
  it('should do the crazy order with one record', () => {
    const b = crazyOrder([25]);
    expect(b).toEqual([25]);
  });
  it('should do the crazy order with two records', () => {
    const b = crazyOrder([25, 26]);
    expect(b).toEqual([25, 26]);
  });
});
