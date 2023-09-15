export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let r = haystack.length;

    while (l < r) {
        const m = Math.floor(l + (r - l) / 2);

        if (needle === haystack[m]) {
            return true;
        } else if (needle < haystack[m]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return false;
}
