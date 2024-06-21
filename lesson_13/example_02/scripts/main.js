const toBuy = ['молоко', 'пиво', 'вода'];
const toBuyHTMLforVanillaJS = toBuy.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    return listItem;
})

const ulElement = document.querySelector('#list');

// toBuyHTMLforVanillaJS.forEach(
//     element => {
//         ulElement.append(element);
//     }
// );


ulElement.append(...toBuyHTMLforVanillaJS);

const links = [
    { text: 'Home', href: 'https://www.example.com' },
    { text: 'About', href: 'https://www.example.com/about' },
    { text: 'Contact', href: 'https://www.example.com/contact' }
];
const container = document.getElementById('links-container');

const nodeList = links.map(link => {
    const listItem = document.createElement('a');
    listItem.href = link.href;
    listItem.textContent = link.text;
    return listItem;
});
linkElements.forEach(listItem => {
    container.appendChild(listItem);
    container.appendChild(document.createElement('br'));
});

