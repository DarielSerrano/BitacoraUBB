"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BitacorasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [bitacora] = yield database_1.default.query('SELECT * FROM bitacora'); //consulta sql  
            res.json(bitacora);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const bitacora = yield database_1.default.query('SELECT * FROM bitacora WHERE idbitacora = ?', [id]);
            if (bitacora.length > 0) {
                return res.json(bitacora[0]);
            }
            res.status(404).json({ text: "The bitacora doesn't exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO bitacora set ?', [req.body]); //consulta sql
            res.json({ message: 'bitacora saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('UPDATE bitacora set ? WHERE idbitacora = ?', [req.body, id]);
            res.json({ message: 'The bitacora was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('DELETE FROM bitacora WHERE idbitacora = ?', [id]);
            res.json({ message: 'bitacora was deleted' });
        });
    }
}
const bitacorasController = new BitacorasController();
exports.default = bitacorasController;
