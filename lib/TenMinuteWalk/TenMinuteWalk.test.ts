import {isValidWalk} from './TenMinuteWalk';

describe("example", function() {
    it("test", () => {
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true)
        expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
        expect(isValidWalk(['w'])).toBe(false);
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
    });
});