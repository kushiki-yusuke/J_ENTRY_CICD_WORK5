const TriangleChecker = require('./TriangleChecker');

test('有効な三角形のテスト', () => {
    const checker = new TriangleChecker(3, 4, 5);
    expect(checker.isValidTriangle()).toBe(true);
});

test('無効な三角形のテスト', () => {
    const checker = new TriangleChecker(1, 2, 4);
    expect(checker.isValidTriangle()).toBe(false);
});

test('全ての辺が同じで有効な三角形のテスト', () => {
    const checker = new TriangleChecker(2, 2, 2);
    expect(checker.isValidTriangle()).toBe(true);
});
