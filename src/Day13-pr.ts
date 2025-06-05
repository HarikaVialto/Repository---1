function combinationSum(candidates: number[], target: number): number[][] 
{
    const result: number[][] = [];
    const combination: number[] = [];

    function backtrack(startIndex: number, remainingTarget: number): void 
    {
        if (remainingTarget === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) 
            {
            const num = candidates[i];
            if (num > remainingTarget) break;

            combination.push(num);
            backtrack(i, remainingTarget - num);
            combination.pop();
        }
    }

    candidates.sort((a, b) => a - b);
    backtrack(0, target);
    return result;
}

const candidates: number[] = [2, 6, 10, 12, 15, 18, 20];
const target: number = 10;
console.log(combinationSum(candidates, target));//[[2,2,2,2,2],[2,2,6],[10]]
