//** Написать функцию, которая примет объект вида и вернет массив обьектов вида: */

const customer =
{
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tоm',
        age: 17
    }
}
const getObjectView = (customer) => {
    const values = [];
    const customerId = Object.keys(customer);
    for (let i = 0; i < customerId.length; i++) {
        const id = customerId[i];
        const customerData = customer[id];
        values.push({ id, ...customerData });
    }
    return values;
}
console.log(getObjectView(customer));