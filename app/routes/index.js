const fs = require("fs");
const path = require("path");

const extractRoutes = (app, service, dirname) => {
    const basename = path.basename(__filename);

    fs
        .readdirSync(dirname)
        .forEach(file => {
            if (file !== basename) {
                if (file.slice(-3) === '.js') {
                    const router = require(path.join(dirname, file));
                    app.use(`${service}/${file.split('.')[0]}`, router);
                }
                else {
                    extractRoutes(app, `${service}${file}`, path.join(dirname, file));
                }
            }
        });
}

const router = (app) => extractRoutes(app, '/', __dirname);

module.exports = {
    router
}