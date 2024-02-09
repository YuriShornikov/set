export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        if (this.members.has(character)) {
            throw new Error('дублирование');
        } else {
            this.members.add(character);
        }
    }

    addAll(...characters) {
        for (const character of characters) {
            if (this.members.has(character)) {
                throw new Error('дублирование');
            } else {
                this.members.add(character);
            }
        }
    }

    toArray() {
        return [...this.members];
    }
}