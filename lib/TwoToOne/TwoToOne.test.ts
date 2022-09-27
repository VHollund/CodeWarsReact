import * as assert from "assert";
import {longest} from "./TwoToOne";

describe("Fixed Tests", function() {
    it("Basic tests longest", function() {
        assert.strictEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty");
        assert.strictEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        assert.strictEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
        assert.strictEqual(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
    });
});