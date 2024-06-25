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
    const changeELement=(cust)=>{
        return {id: cust, ...customer[cust]}
    }
    const customerId = Object.keys(customer);
    const newArray = customerId.map(changeELement);
    return newArray;

}
console.log(getObjectView(customer));