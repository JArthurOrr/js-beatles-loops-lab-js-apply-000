function theBeatlesPlay(musicians, instruments ){
	var Array= ["John Lennon plays Guitar",
	"Paul McCartney plays bass Guitar",
	"George Harrison plays Lead Guitar",
	"Ringo Starr plays Drums"
	];
	for(var i= 0; i < musicians.length; i += 1 ){
	Array.push(musicians[i] + "plays" + instruments[i])
}
return Array;
}

function johnLennonFacts(){
  var hippieFacts = ['He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'];
}