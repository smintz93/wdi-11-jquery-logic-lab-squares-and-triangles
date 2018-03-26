console.log("Making a triangle");

// Need class of triangle 
// Need class of row 


// Loop through rows. 
// Loop through triangles
// insdie the rows we have triangles which have been appended to the rows
function generatePyramid(times) {
	for (let i = 0; i <= times; i++) {
		const row = $("<div>")
		row.addClass("row")

		for (let j = 0; j < i ; j++) {
			const triangle = $("<div>")
			triangle.addClass("triangle")
			triangle.appendTo(row)
			row.appendTo($("body"))
		}
	}
}

generatePyramid(8)