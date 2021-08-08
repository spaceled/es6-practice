function createUser(name, age = 18) {
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const res = createUser('Kabir');
console.log(res);
