"use strict";
function combinationSum(candidates, target) {
    const result = [];
    const combination = [];
    function backtrack(startIndex, remainingTarget) {
        if (remainingTarget === 0) {
            result.push([...combination]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            const num = candidates[i];
            if (num > remainingTarget)
                break;
            combination.push(num);
            backtrack(i, remainingTarget - num);
            combination.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    backtrack(0, target);
    return result;
}
const candidates = [2, 6, 10, 12, 15, 18, 20];
const target = 10;
console.log(combinationSum(candidates, target));
