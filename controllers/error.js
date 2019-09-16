exports.get404 = (req, res, next) => {
    console.error('Inavlid Path : ' + req.url)
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
};