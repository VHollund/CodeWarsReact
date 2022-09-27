export function bouncingBall(h: number, bounce: number, window: number): number {
    return h > 0 && bounce > 0 && bounce < 1 && window < h ? Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1 : -1;
}