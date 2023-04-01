export async function lambdaLibrary<T>(event: any, fn: (event: any) => Promise<T>): Promise<T> {
  return await fn(event);
}
