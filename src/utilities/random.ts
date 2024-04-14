import { random } from "maath";

export function generateRandomPoints<T extends Float32Array | Float64Array>(
  args: T,
  radius?: number,
): T {
  return random.inSphere(args, { radius: radius ?? 1.2,  }) as T;
}
