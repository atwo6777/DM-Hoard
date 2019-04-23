// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };

const http = require('http')
const app = require('./App')

const port = normalizePort(process.env.PORT || 1984);
app.default.set("port", port);


const server = http.createServer(app.default)
// server.on("error", onError)
// server.on("listening", onListening)

server.listen(port)

function normalizePort(val) {
    let port = typeof val === "string" ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== "listen")
        throw error;
    let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    return __awaiter(this, void 0, void 0, function* () {
        let addr = server.address();
        let bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening on ${bind}`);
        yield typeorm_1.createConnection()
            .then(conn => {
            if (conn.isConnected)
                console.log(`Established connection to database`);
            else
                console.log(`Unable to establish database connection, please restart server`);
        })
            .catch(err => {
            console.log(err);
        });
    });
}