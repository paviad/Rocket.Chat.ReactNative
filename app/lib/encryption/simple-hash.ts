export const simpleHash = (s: string): number => {
	let i;
	let h;
	for (i = 0, h = 9; i < s.length;)
		h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
	return h ^ h >>> 9
}
