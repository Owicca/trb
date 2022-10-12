/*browser.runtime.onMessage.addListener((req, sender, callback) => {
    let query = browser.cookies.getAll({
        name: "ro_auth"
    });

    query
        .then(cookies => {
            callback({
                "isLogged": () => {
                    console.log(cookies.length > 0)
                    return cookies.length > 0;
                }
            });
        })
        .catch(err => {
            callback({
                "isLogged": "catch"
            });
        });
});*/
