type Move = 'down'|'up'|'right'|'left'

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
    let queue = []
    moves.forEach((move) => {
        switch (move) {
            case 'up':
                position[0] == 0? position[0] = 0 : position[0]--
                break
            case 'down':
                position[0] == 1? position[0] = 1 : position[0]++
                break
            case 'left':
                position[1] = position[1] == 0 ? fighters[0].length - 1 : position[1] - 1
                break
            case 'right':
                position[1] = position[1] == fighters[0].length - 1 ? 0 : position[1] + 1
                break
        }
        queue.push(fighters[position[0]][position[1]])
    })
    return queue
}