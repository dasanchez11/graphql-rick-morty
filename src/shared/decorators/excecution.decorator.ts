export function LogExecutionTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const start = performance.now();

    // Execute the original method
    const result = await originalMethod.apply(this, args);

    const end = performance.now();
    console.log(
      `${propertyKey} executed in ${(end - start).toFixed(2)} milliseconds`
    );

    return result;
  };
}
