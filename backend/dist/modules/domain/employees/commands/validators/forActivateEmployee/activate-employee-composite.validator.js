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
exports.ActivateEmployeeCompositeValidator = void 0;
const validation_1 = require("../../../../../common/commands/validation");
const CompositeValidator_1 = require("../../../../../common/commands/validation/CompositeValidator");
const activate_employee_command_1 = require("../../activate-employee.command");
const check_employee_exists_validator_1 = require("./check-employee-exists.validator");
let ActivateEmployeeCompositeValidator = class ActivateEmployeeCompositeValidator extends CompositeValidator_1.CompositeValidator {
    constructor(checkEmployeeExists) {
        super([checkEmployeeExists]);
    }
};
ActivateEmployeeCompositeValidator = __decorate([
    (0, validation_1.CommandValidator)(activate_employee_command_1.ActivateEmployee),
    __metadata("design:paramtypes", [check_employee_exists_validator_1.CheckEmployeeExistsOnActivate])
], ActivateEmployeeCompositeValidator);
exports.ActivateEmployeeCompositeValidator = ActivateEmployeeCompositeValidator;
//# sourceMappingURL=activate-employee-composite.validator.js.map