import * as assert from "assert";
import {countBits} from "./BitCounting";

describe("example", function() {
    it("test", function() {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(4), 1);
        assert.equal(countBits(7), 3);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(10), 2);
        assert.equal(countBits(1313637389868135), 29)
        assert.equal(countBits(3998825850167579), 24)
    });
});