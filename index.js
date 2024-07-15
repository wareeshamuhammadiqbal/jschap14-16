//Queston 1
// litteral notation array

var studentName = [];


// Question 2
// object notation array

var studentName = new Array();

// Question 03
// string array 

var siblingsName = ['Maryam' , ' Azam' ,'Misbah'];


//Question 04
// number array 

var num = [81 , 79 , 56];


//Question 05
// boolean array 

var boolean = [false , true];


//Question 06
// mixed array 

var mixed = [81 , ' Maryam' , true , undefined , 789 , false , 'azam' , null ];


//Question 07
// education array 

document.write('<h1>Qualification</h1>');

var qualification = [' SSC' , ' HSC' , ' BCS' , ' BS' , ' BCOM' , ' MS' , ' MPhil' , ' PhD'];

document.write('<h1> Qualification </h1>');
document.write( '<ol>' );
document.write('<li>' + qualification[0] + '</li>' +  '<li>' + qualification[1] + '</li>' +  '<li>' + qualification[2] + '</li>' +  '<li>' + qualification[3] + '</li>' +  '<li>' + qualification[4] + '</li>' + 
'<li>' + qualification[5] + '</li>' + '<li>' + qualification[6] + '</li>' + '<li>' + qualification[7] + '</li>' )
document.write( '</ol>' );

//Question 08
//+ '</li>' + Student score array 

document.write('<h1>Students Scores</h1>');

var studentsName = ['Maryam' , ' Misbah ' , 'Ayesha'];
var studentsScore = [480 , 428 , 320];
var totalScore = 500;
var percentage = [(studentsScore[0] / totalScore ) *100 , (studentsScore[1] / totalScore ) *100 , (studentsScore[2] / totalScore ) *100];

document.write('Score of ' + studentsName[0] + ' is ' + studentsScore[0] + ' .Percentage is '   + percentage[0] + '%'   + '  <br>'   +
               'Score of ' + studentsName[1] + ' is ' + studentsScore[1] + ' .Percentage is ' +  percentage[1] + '%' +  '<br>'  +
               'Score of ' + studentsName[2] + ' is ' + studentsScore[2] + ' .Percentage is ' + percentage[2] + '%' + '<br>'
)

// Question 9
// colour array

document.write('<h3>Colors</h3>');

// Initialize an array with color names
var colors = ["Red", "Green", "Blue"];

// Display array elements in the browser
 document.write(colors + "<br>");


// Ask the user to add color to the beginning of the array
var addColorInStart = prompt('What color you want to add in the begining?');

// Display added color to the beginning of the array
 colors.unshift(addColorInStart);
document.write(colors + "<br>");


// Ask the user to add color to the end of the array
var addColorInEnd = prompt('What color you want to add in the end?');

// Display added color to the end of the array
colors.push(addColorInEnd);
document.write(colors + "<br>");

// Display that add two colors to the beginning of the array
    colors.unshift("Yellow", "Purple");
    document.write(colors + "<br>");


// Delete the first color in the array
 colors.shift();
 document.write(colors + "<br>");

// Delete the last color in the array
colors.pop();
document.write(colors + "<br>");

// Add a color at a specific index
var addColorAtIndex = +prompt('On which index number you want add new color?');
var colorNameAtIndex = prompt('please describe the color name which you want to add at number ' + addColorAtIndex + ' :');
colors.splice(addColorAtIndex, 0, colorNameAtIndex);
document.write(colors + "<br>");


// Delete a color at a specific index
var delColorAtIndex = +prompt('On which index number you want delete the color?');
var delcolorNumber = +prompt('How many colors you want to delete from the index number ' + delColorAtIndex + ' :');
colors.splice(delColorAtIndex , delcolorNumber);
document.write(colors + "<br>");



//Question 10
// ascending an array

document.write('<b>Order the score</b>' + "<br>");

var studentScores = [87, 65, 92, 78, 90];

studentScores.sort()

document.write("Sorted student scores in ascending order: ");
document.write(studentScores + "<br>");


//Question 11
// select cities array

document.write('<h1>Cities</h1>');

var cities = ["Karachi", "Lahore", "Islamabad", "peshawar", "Quetta"];

// Initialize an empty array for selected cities
let selectedCities = [];

// Copy three array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

document.write('<br>'+ "Selected cities: ");
document.write(selectedCities);

//Question 12
// joining an array

document.write('<h1>Joined array</h1>');

var arr = ["This", "is", "my", "cat"];

var joined = arr.join(' ');

document.write('<br>' + arr + '<br>');
document.write(joined);

//Question 13
// one by one calling array 
document.write('<h1> Devices </h1>');

var device = ['Monitor ','Keyboard ','CPU ','Mouse '];
document.write(device);


device1 = device.shift();
document.write('<h3>Out</h3>');
document.write(device1);

device2 = device.shift();
document.write('<h3>Out</h3>');
document.write(device2);

device3 = device.shift();
document.write('<h3>Out</h3>');
document.write(device3);

device4 = device.shift();
document.write('<h3>Out</h3>');
document.write(device4);


//question 14
//from Last calling array

document.write('<h1>New Devices </h1>');

var device = ['Monitor ','Keyboard ','CPU ','Mouse '];
document.write(device);

device1 = device.pop();
document.write('<h3>Out</h3>');
document.write(device1);

device2 = device.pop();
document.write('<h3>Out</h3>');
document.write(device2);

device3 = device.pop();
document.write('<h3>Out</h3>');
document.write(device3);

device4 = device.pop();
document.write('<h3>Out</h3>');
document.write(device4);


//Question 15
//Phone manufatue array

document.write('<h1>Phone Manufacture</h1>');

// Array to store phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display to generate dropdown/select menu

    document.write("<select>");
    
        document.write('<option>'  + phoneManufacturers[0] + '</option>');
        document.write('<option>'  + phoneManufacturers[1] + '</option>');
        document.write('<option>'  + phoneManufacturers[2] + '</option>');
        document.write('<option>'  + phoneManufacturers[3] + '</option>');
        document.write('<option>'  + phoneManufacturers[4] + '</option>');
        document.write('<option>'  + phoneManufacturers[5] + '</option>');

    document.write("</select>");