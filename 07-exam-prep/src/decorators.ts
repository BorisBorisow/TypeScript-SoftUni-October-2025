export function NotifyOnSuccess(notoficationType: "Email" | "Push") {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originals = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = originals.apply(this, args);

      if (typeof result === "string" && !result.startsWith("ERROR")) {
        console.log(
          `[NOTIFY] Sending ${notoficationType} notification for successful action ${methodName}.`
        );
      }
      return result;
    };
    return descriptor;
  };
}
