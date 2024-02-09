import Team from "../Team";
import Character from "../class";


describe('test class Team', () => {
    const team = new Team();
    const person1 = new Character('Andrew');
    const person2 = new Character('Mike');
    const person3 = new Character('Suzan');

    test('create one character', () => {
        team.add(person1);
        expect(team.members.has(person1)).toBe(true);
    })
    test('after one person dublicate', () => {
        expect(() => team.add(person1)).toThrow('дублирование');
    })
    test('add 2 and more persons', () => {
        team.addAll(person2, person3);

        expect([...team.members]).toContainEqual(person2);
        expect([...team.members]).toContainEqual(person3);
    })
    test('dublicate when already added 2 and 3', () => {
        expect(() => team.addAll(person2)).toThrow('дублирование');
    })
    test('toArray', () => {
        const toArrayResult = team.toArray();
        expect(toArrayResult.length).toBe([...team.members].length);
    })
})