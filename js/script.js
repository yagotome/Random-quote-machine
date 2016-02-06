$(function() {
	var quotes = [
		{		
			phrase: "Whatever the mind of man can conceive and believe, it can achieve.",
			author: "Napoleon Hill"
		},
		{		
			phrase: "Your time is limited, so don’t waste it living someone else’s life.",
			author: "Steve Jobs"
		},
		{		
			phrase: "Winning isn’t everything, but wanting to win is.",
			author: "Vince Lombardi"
		},
		{		
			phrase: "Try not to become a man of success, but rather try to become a man of value.",
			author: "Albert Einstein"
		},
		{		
			phrase: "We all live under the same sky, but we don't all have the same horizon.",
			author: "Konrad Adenauer"
		},
		{		
			phrase: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
			author: "Bill Gates"
		}
	];

	function randInt(a, b) {
		return a + Math.floor(Math.random()*(b-a+1));
	}

	function newQuote() {
		var i = randInt(0, quotes.length - 1);
		$("#quote-phrase").text(quotes[i].phrase);
		$("#quote-author").text(quotes[i].author);
		$("#btnTweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=“"
			+ quotes[i].phrase + "” – "+ quotes[i].author);
	}

	$("#btnNew").click(newQuote);

	newQuote();

});

