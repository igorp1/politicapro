import delay from './delay';

const tweets = [
	{
		id: "000001",
		text: "Building shit 🤖",
		user: "idp"
	},
	{
		id: "000002",
		text: "I'm hungry......... ICHIRAKU! 🍥",
		user: "naruto"
	},
	{
		id: "000003",
		text: "Kaizoku oni ore wa naru!! 💪🏾👑",
		user: "luffy"
	},
	{
		id: "000004",
		text: "@sasuke what's good bruh bruh",
		user: "naruto"
	},
	{
		id: "000005",
		text: "I'm hungry......... Sanji! Meji! 🍖🍗🍖🍗😍",
		user: "luffy"
	},
];


// This would be done by the back-end of course
const generateId = (length=6) => {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < length; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};

class TweetsApi {

	static getAllTweets() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], tweets));
			}, delay);
		});
	}

	static saveTweet(tweet) {
		// to avoid manipulating object passed in.
        tweet = Object.assign({}, tweet); 
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                tweet.id = generateId(tweet);
                tweets.push(tweet);

                resolve(tweet);
            }, delay);
        });
	}

	static deleteTweet(tweetId) {
		return new Promise((resolve, reject) => {
            setTimeout(() => {
                const toDeleteindex = tweets.findIndex( tweet => tweet.id === tweetId );
                if(toDeleteindex === -1){ reject('Given ID is not valid'); }
                else{
                    tweets.splice(toDeleteindex, 1);
                    resolve();
                }
            }, delay);
        });
	}

}

export default TweetsApi;