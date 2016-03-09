module.exports = function(stockRepository) {
    return {
        getCount: function (req, res) {
            console.log("get count isbn", req.params.isbn);
            stockRepository.getCount(req.params.isbn).then(function (result) {
                console.log("get result", result);
                if (result !== null) {
                    res.format({
                        html: function(){
                            res.send('<div class="available">Available</div>');
                        },
                        json: function(){
                            res.send({ status: 'available' });
                        }
                    });
                    //res.status(200).json({count: result});
                } else {
                    res.format({
                        html: function(){
                            res.send('<div class="notAvailable">Not available</div>');
                        },

                        json: function(){
                            res.send({ status: 'notAvailable' });
                        }
                    });
                    //res.status(404).json({error: 'No book with ISBN: ' + req.params.isbn});
                }
            });
        },
        stockUp: function (req, res, next) {
            stockRepository.
            stockUp(req.body.isbn, req.body.count).
            then(function (result) {
                res.json({isbn: req.body.isbn, count: req.body.count});
            }).
            catch(next);
        },
        getAll: function (req, res, next) {
            stockRepository.
            findAll().
            then(function (books) {
                res.json(books);
            }).
            catch(next);
        }
    }  ;
}       ;