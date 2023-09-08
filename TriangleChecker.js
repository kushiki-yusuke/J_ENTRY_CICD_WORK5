class TriangleChecker {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isValidTriangle() {
        // 任意の2辺の合計が第3辺よりも大きいかどうかをチェック
        return this.a + this.b > this.c &&
               this.a + this.c > this.b &&
               this.b + this.c > this.a;
    }
}

modules.export = TriangleChecker;
