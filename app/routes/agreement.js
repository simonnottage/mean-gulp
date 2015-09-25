module.exports = function (app) {
    app.get('/api/agreements', function (req, res) {
        return {
          "agreements":[
              {
                  "name": "Simon"
              },
              {
                  "name": "Keren"
              }
          ]
        };
    })
};