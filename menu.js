let menuList = document.getElementById("menuList")

for(let index = 0; index < dishes.length; index++) {
  let dish = dishes[index]

let menuItem = `
<li>
<label>${dish.title}</label>
<h4>${dish.description}</h4>
<p>${dish.price}</p>
<img src= "${dish.imageURL}">
</li>
`

menuList.insertAdjacentHTML('beforeend',menuItem)


}
