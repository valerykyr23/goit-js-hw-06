

const caterogies = document.querySelectorAll('.item');
console.log(`Number of categories: ${caterogies.length}`)

caterogies.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`)
    console.log(`Elements: ${category.querySelector('ul').children.length}`);
})







