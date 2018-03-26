console.log("Make a checkerboard");

// making a container to hold the 8 articles 
const container = function() {
	for(let i = 0; i < 8; i++) {
	const article = $("<article>")
	article.appendTo($("body"))	
	article.css({
		"height": "50px"
	})

	}

}

container();

// creating the blocks and styling them. appending the boxes(divs)
// to the article tag created above
const block = function() {
	
	for(let i = 0; i < 8; i++) {
		const div = $("<div class='box'>")
		// console.log(div)
		$("article").eq(i).append(div)

		div.css({
		"border" : "1px solid black",
		"background-color": "white",
		"height": "50px",
		"width": "50px",
		"display": "inline-block",
		})
	} 	


}
// adding each blocks
const addBlocks = function() {
	for(let i = 0; i < 8; i++)
		block()


}

addBlocks()

// even divs inside the article get red 
// odd divs inside the article get black 
const setColor = function() {
	$("div:even").addClass("red")
	$("div:even").css("background-color", "red")
	$("div:odd").add("black")
	$("div:odd").css("background-color", "black")

}

setColor();

// loop through it instead of doing it manually 

const color2 = function() {
	for(let i = 0; i < $("article:odd").length; i++){

		$("article:odd div:last-child").eq(i).prependTo($("article:odd").eq(i));
	}

}

color2();

// Need to make rows 1 3 5 7 the same. color wise 





// MAKE 



