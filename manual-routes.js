/**
 * 
 * @param {*} req 
 * @param {*} res 
 * This file uses core node js to provide responses.
 */

const routes = (req, res) => {
    const URL = req.url;
    const METHOD = req.method;
    switch (URL) {
        case '/':
            res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <body>
                <h2>Welcome to Users Node App</h2>
                <form action="create-user" method="post">
                    <input type="text" name="user"><button type="submit">Create User</button>
                </form>
            </body>
            </html>`);
            return res.end();

        case '/users':
            res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <body>
                <h2>Users List</h2>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                </ul>
            </body>
            </html>`);
            return res.end();

        case '/create-user':
            const body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                console.log(body);
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody);
            });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        default:
            res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <body>
            Error : ${URL}
        </body>
        </html>`);
            return res.end();
    }
}

module.exports = routes;