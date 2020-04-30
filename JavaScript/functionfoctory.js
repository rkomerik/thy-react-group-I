function multiLanguageHttpClient(language) {
    return (url) => {
        if (language === 'en') {
            console.log(`${url}?lang=${language}`);
        }
        if (language === 'tr') {
            console.log(`${url}?lang=${language}`);
        }
    };
}

var enClient = multiLanguageHttpClient('en');
var trClient = multiLanguageHttpClient('tr');

enClient("http://www.thy.com/");
trClient("http://www.thy.com/");

