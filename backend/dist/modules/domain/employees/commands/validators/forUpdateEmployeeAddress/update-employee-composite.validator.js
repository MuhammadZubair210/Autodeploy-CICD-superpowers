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
exports.UpdateEmployeeAddressCompositeValidator = void 0;
const validation_1 = require("../../../../../common/commands/validation");
const CompositeValidator_1 = require("../../../../../common/commands/validation/CompositeValidator");
const update_employee_address_command_1 = require("../../update-employee-address.command");
const check_employee_exists_validator_1 = require("./check-employee-exists.validator");
const check_properties_value_validator_1 = require("./check-properties-value.validator");
let UpdateEmployeeAddressCompositeValidator = class UpdateEmployeeAddressCompositeValidator extends CompositeValidator_1.CompositeValidator {
    constructor(joiValidator, checkEmployeeExists) {
        super([joiValidator, checkEmployeeExists]);
    }
};
UpdateEmployeeAddressCompositeValidator = __decorate([
    (0, validation_1.CommandValidator)(update_employee_address_command_1.UpdateEmployeeAddress),
    __metadata("design:paramtypes", [check_properties_value_validator_1.CheckUpdateAddressPropertiesValue,
        check_employee_exists_validator_1.CheckEmployeeAddressExists])
], UpdateEmployeeAddressCompositeValidator);
exports.UpdateEmployeeAddressCompositeValidator = UpdateEmployeeAddressCompositeValidator;
//# sourceMappingURL=update-employee-composite.validator.js.map