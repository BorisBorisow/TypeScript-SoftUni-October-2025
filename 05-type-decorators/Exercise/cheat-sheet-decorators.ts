// ==========================
// DECORATOR SIGNATURES CHEATSHEET
// ==========================

// Class Decorators
// 1. constructor (target)
//
// function ClassDecorator(constructor: Function) {}

// Accessor Decorators
// 1. Target (constructor function for static members, prototype for instance members)
// 2. Property name
// 3. Descriptor
//
// function AccessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}

// Method Decorators
// 1. Target (constructor function for static members, prototype for instance members)
// 2. Method name
// 3. Descriptor
//
// function MethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {}

// Property Decorators
// 1. Target (constructor function for static members, prototype for instance members)
// 2. Property name
//
// function PropertyDecorator(target: any, propertyKey: string) {}

// Parameter Decorators
// 1. Target (prototype)
// 2. Method name
// 3. Index of parameter in the parameter's list
//
// function ParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {}
