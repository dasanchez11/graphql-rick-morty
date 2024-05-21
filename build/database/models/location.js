var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Column, DataType, Table, Model, HasMany, } from "sequelize-typescript";
import { Character } from "./character";
let Location = (() => {
    let _classDecorators = [Table({
            timestamps: true,
            tableName: "locations",
            modelName: "Location",
            createdAt: true,
            updatedAt: true,
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _dimension_decorators;
    let _dimension_initializers = [];
    let _dimension_extraInitializers = [];
    let _url_decorators;
    let _url_initializers = [];
    let _url_extraInitializers = [];
    let _residents_decorators;
    let _residents_initializers = [];
    let _residents_extraInitializers = [];
    var Location = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.type = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.dimension = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _dimension_initializers, void 0));
            this.url = (__runInitializers(this, _dimension_extraInitializers), __runInitializers(this, _url_initializers, void 0));
            this.residents = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _residents_initializers, void 0));
            __runInitializers(this, _residents_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Location");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _id_decorators = [Column({
                primaryKey: true,
                type: DataType.UUID,
                defaultValue: DataType.UUIDV4,
            })];
        _name_decorators = [Column({
                type: DataType.STRING,
            })];
        _type_decorators = [Column({
                type: DataType.STRING,
            })];
        _dimension_decorators = [Column({
                type: DataType.STRING,
            })];
        _url_decorators = [Column({
                type: DataType.STRING,
            })];
        _residents_decorators = [HasMany(() => Character)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _dimension_decorators, { kind: "field", name: "dimension", static: false, private: false, access: { has: obj => "dimension" in obj, get: obj => obj.dimension, set: (obj, value) => { obj.dimension = value; } }, metadata: _metadata }, _dimension_initializers, _dimension_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: obj => "url" in obj, get: obj => obj.url, set: (obj, value) => { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, null, _residents_decorators, { kind: "field", name: "residents", static: false, private: false, access: { has: obj => "residents" in obj, get: obj => obj.residents, set: (obj, value) => { obj.residents = value; } }, metadata: _metadata }, _residents_initializers, _residents_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Location = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Location = _classThis;
})();
export { Location };
//# sourceMappingURL=location.js.map