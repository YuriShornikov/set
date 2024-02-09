import Character from "../class";

test('create class', () => {
    const person = new Character('Andrew')
    expect(person.name).toBe('Andrew');
})