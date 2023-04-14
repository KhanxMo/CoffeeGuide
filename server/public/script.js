// API KEY: vX51sD0k2pgkBtQnWr1ye6c2b
// API KEY SECRET: LFJEa39qy4dH3jHZfG5AOEFdNyAAI3xH5ogIUyQdSJQ1oIpGmi

// ACCESS TOKEN: 1646948925587202068-dcZnKEDbcgY64sL1640O2OlrCLvsEi
// ACCESS TOKEN SECRET: j0gAFifZtRvZn2Uoylawh1wVPl8KOpdX4Avl2vYeLEUd3

/*
    const apiKey = 'vX51sD0k2pgkBtQnWr1ye6c2b';
    const apiSecretKey = 'LFJEa39qy4dH3jHZfG5AOEFdNyAAI3xH5ogIUyQdSJQ1oIpGmi';
    const accessToken = '1646948925587202068-dcZnKEDbcgY64sL1640O2OlrCLvsEi';
    const accessTokenSecret = 'j0gAFifZtRvZn2Uoylawh1wVPl8KOpdX4Avl2vYeLEUd3';
*/

$(document).ready(function() {
        function fetchTweets() {
            $.ajax({
                url: '/api/tweets',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    displayTweets(data);
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
        
        // Display the tweets 
        function displayTweets(tweets) {
            const tweetsContainer = $('#tweets-container');
            
            // update html
            tweets.forEach(function(tweet) {
                const tweetHTML = `
                    <div class="tweet">
                        <h3>${tweet.user.name} (@${tweet.user.screen_name})</h3>
                        <p>${tweet.full_text}</p>
                    </div>
                `;
                tweetsContainer.append(tweetHTML);
            });
        }
    
        fetchTweets();
    });
    