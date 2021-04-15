//Get textarea 
let textarea = document.querySelector('textarea');

//Created Object Constructor
function CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy) 
{
	this.name = name;
	this.type = type;
	this.size = size;
	this.drizzle = drizzle;
	this.whippedCream = whippedCream;
	this.sweetener = sweetener;
	this.coldFoam = coldFoam;
	this.dairy = dairy;


	this.orderInfo = function() 
    {
		textarea.textContent += '===============================================\n' +

        'Customer: ' + this.name + '\n' +
		'Order: ' + this.size + ' ' + this.type + '\n';

		//additional requirment if cuscomer add anything
		if(this.drizzle || this.whippedCream || this.sweetener || this.coldFoam || this.dairy != 'None')
        textarea.textContent += 'Additional require: \n';
		if(this.drizzle)
        textarea.textContent += '\t- Drizzle\n';
		if(this.whippedCream)
        textarea.textContent += '\t- Whipped Cream\n';
		if(this.sweetener)
        textarea.textContent += '\t- Sweetener\n';
		if(this.coldFoam)
        textarea.textContent += '\t- Cold Foam\n';
		if(this.dairy != 'None')
        textarea.textContent += '\t- ' + this.dairy + '\n';
	};
}

//get radio button checked
function radioButton(name) 
{
	var radio = document.getElementsByName(name);
	for(var i = 0; i < radio.length; i++) 
    { 
		if(radio[i].checked) 
        {
			return radio[i].value == 'yes';
		}
	}
}


// function for submit the form
let placeOder = document.getElementById('place_order');

placeOder.onclick = function() 
{
	let name = document.getElementById('name').value;
	let type = document.getElementById('type').value;
	let size = document.getElementById('size').value;
	let drizzle = radioButton('drizzle');
	let whippedCream = radioButton('whippedCream');
	let sweetener = radioButton('sweetener');
	let coldFoam = radioButton('coldFoam');
	let dairy = document.getElementById('dairy').value;


	//Using an object constructor function to display the new order placed.
	new CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy).orderInfo();
};
