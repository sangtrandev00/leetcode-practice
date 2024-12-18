/**
  * The `isBadVersion` function is a predicate that determines whether
  * a given software version is bad. The actual implementation is unspecified.
  *
  * @param version - The version number to check.
  * @returns `true` if the specified version is bad, otherwise `false`.
  */
type IsBadVersion = (version: number) => boolean;

/**
  * This function is a higher-order function that takes in the `isBadVersion` function
  * and returns a nested function that can be used to find the first bad version.
  *
  * @param isBadVersion - A function to determine whether a given version is bad.
  * @returns A function that accepts the total number of versions `n` and returns the
  * first bad version found.
  */

export const solution = (isBadVersion: IsBadVersion): ((n: number) => number) => {
    /**
     * This inner function uses binary search to efficiently find the first bad version 
     * within the total number of versions `n`. 
     *
     * @param n - The total number of versions to search through.
     * @returns The first bad version number within the total versions.
     */
    return (n: number): number => {
        let left: number = 1;
        let right: number = n;
        while (left < right) {
            // Use Math.floor to ensure the result is an integer after the division.
            const midpoint: number = left + Math.floor((right - left) / 2);
            if (isBadVersion(midpoint)) {
                right = midpoint;
            } else {
                left = midpoint + 1;
            }
        }
        // At this point, 'left' is the first bad version.
        return left;
    };
};
