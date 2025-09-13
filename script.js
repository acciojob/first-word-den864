function firstWord(s) {
  // your code here
	const str=s.trim().split(" ");
	return str[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
