export default function exhaustivenessCheck(value: never) {
  throw new Error(`Exhaustiveness check fell through: ${value}`);
}
