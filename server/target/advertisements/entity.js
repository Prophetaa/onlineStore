"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const class_validator_1 = require("class-validator");
let Advertisement = class Advertisement extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Advertisement.prototype, "id", void 0);
__decorate([
    class_validator_1.MinLength(5),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Advertisement.prototype, "title", void 0);
__decorate([
    class_validator_1.MinLength(10),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Advertisement.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Advertisement.prototype, "pictureURL", void 0);
__decorate([
    class_validator_1.MinLength(1),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", Number)
], Advertisement.prototype, "price", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.MinLength(5),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Advertisement.prototype, "email", void 0);
__decorate([
    class_validator_1.Length(10),
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", Number)
], Advertisement.prototype, "phoneNumber", void 0);
Advertisement = __decorate([
    typeorm_1.Entity()
], Advertisement);
exports.default = Advertisement;
//# sourceMappingURL=entity.js.map