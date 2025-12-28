export function ApplyCommission(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalGetter = descriptor.get;

  if (!originalGetter) {
    throw new Error(
      `@ApplyCommission can only be applied to a getter property. Missing getter on ${propertyKey}`
    );
  }

  descriptor.get = function () {
    const basePrice = originalGetter.call(this);
    return basePrice * 1.2;
  };
}
