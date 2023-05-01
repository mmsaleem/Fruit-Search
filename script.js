const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const inputText = document.querySelector('input [type = text]')

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];




function search(e) {
	console.log(e)
	const childrenLI = Array.from(suggestions.children)
	console.log({childrenLI})

	childrenLI.map(function(val){
		val.remove()
	})

	if (e.target.value === "") {
		return 
		} 

	let results = fruits.filter(function(val){
		
		return val.toLowerCase().includes(e.target.value.toLowerCase()) 
		
	})
    console.log({results})
     
	

	results.map(function(val){
	
		const LI = document.createElement("li")
		LI.className = "fruity"
		LI.textContent = val
		suggestions.append(LI)

	})
	 
   

	return results;



}

function searchHandler(e) {
	
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
    const targetTag = e.target.tagName
	if(targetTag === "LI") {
		input.value = e.target.textContent
		
	}
	search(e)
	console.log(e.target.textContent)
	
}

input.addEventListener('keyup', search)



suggestions.addEventListener('click', useSuggestion);

/*suggestions.addEventListener('mouseover', function(e){

   //const li = document.querySelector("li")
   //li.style.backgroundColor = "Orange"
   const targetTag = e.target.tagName
   if (targetTag === "LI") {
	e.target.style.backgroundColor = "Orange"
   }
   

    
})*/

