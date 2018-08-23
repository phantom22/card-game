var cards = {

	0:{

		0:{

			"name":"AS",
			"value":14

		},

		1:{

			"name":"2S",
			"value":2

		},

		2:{

			"name":"3S",
			"value":3

		},

		3:{

			"name":"4S",
			"value":4

		},

		4:{

			"name":"5S",
			"value":5

		},

		5:{

			"name":"6S",
			"value":6

		},

		6:{

			"name":"7S",
			"value":7

		},

		7:{

			"name":"8S",
			"value":8

		},

		8:{

			"name":"9S",
			"value":9

		},

		9:{

			"name":"10S",
			"value":10

		},

		10:{

			"name":"JS",
			"value":11

		},

		11:{

			"name":"QS",
			"value":12

		},

		12:{

			"name":"KS",
			"value":13

		},

		13:{

			"name":"JOKER",
			"value":15

		}

	},

	1:{

		0:{

			"name":"AH",
			"value":14

		},

		1:{

			"name":"2H",
			"value":2

		},

		2:{

			"name":"3H",
			"value":3

		},

		3:{

			"name":"4H",
			"value":4

		},

		4:{

			"name":"5H",
			"value":5

		},

		5:{

			"name":"6H",
			"value":6

		},

		6:{

			"name":"7H",
			"value":7

		},

		7:{

			"name":"8H",
			"value":8

		},

		8:{

			"name":"9H",
			"value":9

			},

		9:{

			"name":"10H",
			"value":10

		},

		10:{

			"name":"JH",
			"value":11

		},

		11:{

			"name":"QH",
			"value":12

		},

		12:{

			"name":"KH",
			"value":13

		},

		13:{

			"name":"JOKER",
			"value":15

		}

	},

	2:{

		0:{

			"name":"AC",
			"value":14

		},

		1:{

			"name":"2C",
			"value":2

		},

		2:{

			"name":"3C",
			"value":3

		},

		3:{

			"name":"4C",
			"value":4

		},

		4:{

			"name":"5C",
			"value":5

		},

		5:{

			"name":"6C",
			"value":6

		},

		6:{

			"name":"7C",
			"value":7

		},
		
		7:{

			"name":"8C",
			"value":8

		},

		8:{

			"name":"9C",
			"value":9

		},

		9:{

			"name":"10C",
			"value":10

		},

		10:{

			"name":"JC",
			"value":11

		},

		11:{

			"name":"QC",
			"value":12

		},

		12:{

			"name":"KC",
			"value":13

		},

		13:{

			"name":"JOKER",
			"value":15

		}

	},

	3:{

		0:{

			"name":"AD",
			"value":14

		},

		1:{

			"name":"2D",
			"value":2

		},

		2:{

			"name":"3D",
			"value":3

		},

		3:{

			"name":"4D",
			"value":4

		},

		4:{

			"name":"5D",
			"value":5

		},

		5:{

			"name":"6D",
			"value":6

		},

		6:{

			"name":"7D",
			"value":7

		},

		7:{

			"name":"8D",
			"value":8

		},

		8:{

			"name":"9D",
			"value":9

		},

		9:{

			"name":"10D",
			"value":10

		},

		10:{

			"name":"JD",
			"value":11

		},

		11:{

			"name":"QD",
			"value":12

		},

		12:{

			"name":"KD",
			"value":13

		},

		13:{

			"name":"JOKER",
			"value":15

		}

	},
	
	4:{
	
		0:{
			
			"name":"X0",
			"value":60
		
		},
		
		1:{
			
			"name":"X1",
			"value":80
		
		},
		
		2:{
			
			"name":"X2",
			"value":100
		
		},
		
		3:{
			
			"name":"X3",
			"value":125
		
		},
		
		4:{
			
			"name":"X4",
			"value":150
		
		},
		
		5:{
			
			"name":"X5",
			"value":175
		
		},
		
		6:{
			
			"name":"X6",
			"value":200
		
		},
		
		7:{
			
			"name":"X7",
			"value":230
		
		},
		
		8:{
			
			"name":"X8",
			"value":260
		
		},
		
		9:{
			
			"name":"X9",
			"value":290
		
		},
		
		10:{
			
			"name":"X10",
			"value":320
		
		},
		
		11:{
			
			"name":"X11",
			"value":355
		
		},
		
		12:{
			
			"name":"X12",
			"value":390
		
		},
		
		13:{
			
			"name":"X13",
			"value":425
		
		},
		
		14:{
			
			"name":"X14",
			"value":465
		
		},
		
		15:{
			
			"name":"X15",
			"value":505
		
		},

	}

}

const lang = "RU";

var currentDeck = [];

function pick(n,debug) {
	
	if (debug) {
		// if there is already a table, deleting it
		if (document.querySelector("#mainTable")) {

			var lastTable = document.getElementById("mainTable");
			lastTable.parentNode.removeChild(lastTable);

		}
	
		// creating a table with n amount of th and n amount of td
		var table = document.createElement("table");
		table.id = "mainTable";
		table.className = "hide";
		// table hidden
		table.style = "visibility:hidden";
		var tbody = document.createElement("tbody");

		var tr = document.createElement("tr");
		for (i = 0;i < n;i++) {
		
			var th = document.createElement("th");
			th.id = "card" + i;
			tr.appendChild(th);
		
		}

		tbody.appendChild(tr);

		var tr = document.createElement("tr");
		for (i = 0;i < n;i++) {
		
			var td = document.createElement("td");
			td.id = "info" + i;
			tr.appendChild(td);
		
		}

		tbody.appendChild(tr);
		table.appendChild(tbody);
		document.body.appendChild(table);

	}

	// randomizing a card for n times
	var tempd = 0;
	currentDeck = [];
	currentDeck.boost = Math.floor(Math.random() * 5);

	for (i = 0;i < n;i++) {

		var currentCard = [];

		var type = Math.floor(Math.random() * 5);
		
		if (type === 4) {
			
			tempd += 1;
		}

		var number = Math.floor(Math.random() * 14);

		var card = cards[type][number];

		var cardName = card.name;
		currentCard.push(cardName);

		var cardVal = card.value;
		if (type == currentDeck.boost && cardName !== "JOKER") {

			var cardVal = cardVal * 2;

		}

		else if (type == currentDeck.boost && cardName == "JOKER") {

			var cardVal = cardVal * 3;

		}

		currentCard.push(cardVal);

		var cardSrc = "content/" + cardName + ".png";
		currentCard.push(cardSrc);

		if (!currentDeck.strenght) {

			currentDeck.strenght = 0;

		}

		currentDeck.strenght += cardVal;
		currentDeck.push(currentCard);
		currentCard.push(type);

	}

	// if no divinities
	if (tempd == 0) {

		tempd = undefined;

	}

	// boosting the strenght of the card by x2, if at least one divinity and the card isn't a divinity
	if (tempd) {

		for (i = 0;i < n;i++) {

			if (currentDeck[i][3] !== 4) {

				currentDeck[i][1] = currentDeck[i][1] * (tempd * 2);

			}

		}

	}

	if (debug) {
	
	// classify card strenght with a color
	for (i = 0;i < n;i++) {

		if (currentDeck[i][1] <= 20) {
			var rarity = "r-common";
		}
		else if (currentDeck[i][1] > 20 && currentDeck[i][1] <= 45) {
			var rarity = "r-epic";
		}
		else if (currentDeck[i][1] > 45 && currentDeck[i][1] <= 70) {
			var rarity = "r-rare";
		}
		else if (currentDeck[i][1] > 70 && currentDeck[i][1] <= 95) {
			var rarity = "r-unique";
		}
		else if (currentDeck[i][1] > 95 && currentDeck[i][1] <= 170) {
			var rarity = "r-leggendary";
		}
		else if (currentDeck[i][1] > 170) {
			var rarity = "r-god";
		}

		var cs = "<img class='card " + rarity + "'";

		document.getElementById("card" + i).innerHTML = cs + " src='" + currentDeck[i][2] + "' alt='" + currentDeck[i][0] + "'>";
		
		// classify amount of strenght added by boost with a color
		if (currentDeck[i][3]) {

			if (currentDeck[i][1] / 2 <= 20 && !tempd) {

				var temp = "common";

			}

			else if (currentDeck[i][1] / 2 > 20 && currentDeck[i][1] / 2 <= 45 && !tempd) {

				var temp = "epic";

			}

			else if (currentDeck[i][1] / 2 > 45 && currentDeck[i][1] / 2 <= 70 && !tempd) {

				var temp = "rare";

			}

			else if (currentDeck[i][1] / 2 > 70 && currentDeck[i][1] / 2 <= 95 && !tempd) {

				var temp = "unique";

			}

			else if (currentDeck[i][1] / 2 > 95 && currentDeck[i][1] / 2 <= 120 && !tempd) {

				var temp = "leggendary";

			}

			else if (currentDeck[i][1] / 2 > 170 && !tempd) {

				var temp = "god";

			}

			else if (tempd) {

				if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) <= 20) {

					var temp = "common";

				}

				else if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) > 20 && currentDeck[i][1] - currentDeck[i][1] / 2 <= 45) {

					var temp = "epic";

				}

				else if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) > 45 && currentDeck[i][1] - currentDeck[i][1] / 2 <= 70) {

					var temp = "rare";

				}

				else if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) > 70 && currentDeck[i][1] - currentDeck[i][1] / 2 <= 95) {

					var temp = "unique";

				}

				else if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) > 95 && currentDeck[i][1] - currentDeck[i][1] / 2 <= 120) {


					var temp = "leggendary";

				}

				else if (currentDeck[i][1] - currentDeck[i][1] / (tempd * 2) > 170) {

					var temp = "god";

				}
	
			}
			
		}

		// if not joker with boost and 0 divinities
		if (currentDeck[i][3] === currentDeck.boost && currentDeck[i][0] !== "JOKER" && !tempd) {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1] + " " +  "<span class='" + temp + "'>" + "(x2)" + "</span>";

		}

		// if joker with boost and 0 divinities
		else if (currentDeck[i][3] === currentDeck.boost && currentDeck[i][0] == "JOKER" && !tempd) {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1] + " " +  "<span class='" + temp + "'>" + "(x3)" + "</span>";

		}

		// if not divinity or joker with boost and with at least 1 divinity
		else if (currentDeck[i][3] === currentDeck.boost && currentDeck[i][0] !== "JOKER" && tempd && currentDeck[i][3] !== 4) {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1] + " " +  "<span class='" + temp + "'>" + "(x" + (2 * (tempd * 2)) + ")" + "</span>";

		}

		// if joker (and not divinity) with boost and with at least 1 divinity
		else if (currentDeck[i][3] === currentDeck.boost && currentDeck[i][0] == "JOKER" && tempd && currentDeck[i][3] !== 4) {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1] + " " +  "<span class='" + temp + "'>" + "(x" + (3 * (tempd * 2)) + ")" + "</span>";

		}

		// if not divinity and with at least 1 divinity 
		else if (tempd && currentDeck[i][3] !== 4) {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1] + " " + "<span class='" + temp + "'>" + "(x" + (tempd * 2) + ")" + "</span>";

		}

		// if divinity
		else if ( currentDeck[i][3] == 4) {

			document.getElementById("info" + i).innerHTML = "<span class='" + temp + "'>" + currentDeck[i][1] + "</span>";

		}

		// common card with no boost
		else {

			document.getElementById("info" + i).innerHTML = currentDeck[i][1];

		}

	}

		// card type (for output)
		switch (currentDeck.boost) {

			case 0: if(lang == "EN"){var currentBoost = "spades"}else if(lang == "RU"){var currentBoost = "����"}; break;
			case 1: if(lang == "EN"){var currentBoost = "hearts"}else if(lang == "RU"){var currentBoost = "�����"}; break;
			case 2: if(lang == "EN"){var currentBoost = "clubs"}else if(lang == "RU"){var currentBoost = "�����"}; break;
			case 3: if(lang == "EN"){var currentBoost = "diamonds"}else if(lang == "RU"){var currentBoost = "������"}; break;
			case 4: if(lang == "EN"){var currentBoost = "divinity"}else if(lang == "RU"){var currentBoost = "��������"}; break;

		}

		if (lang == "EN") {

			var msg_placeholder1 = "strenght: ";
			var msg_placeholder2 = "Trump card: ";

		}

		else if (lang == "RU") {

			var msg_placeholder1 = "����: ";
			var msg_placeholder2 = "������: ";

		}

		document.getElementById("strenght").textContent = msg_placeholder1 + currentDeck.strenght;
		document.getElementById("boost").textContent = msg_placeholder2 + currentBoost;

		// table visible
		document.getElementById("mainTable").style = "visibility:visible";

	}


}

pick(8,true);