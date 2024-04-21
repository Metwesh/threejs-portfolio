import { random } from "maath";

/**
 * Generates random points in a sphere.
 * @param args - The float32 array or float64 array to generate random points for
 * @param radius - The radius of the sphere to generate points in
 * @returns The random points
 */
export function generateRandomPoints<T extends Float32Array | Float64Array>(
  args: T,
  radius?: number,
): T {
  return random.inSphere(args, { radius: radius ?? 1.2 }) as T;
}
