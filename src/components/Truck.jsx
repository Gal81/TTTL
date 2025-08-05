import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Truck({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}) {
  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      <mesh position={[-15, 0, 25]}>
        <boxGeometry args={[70, 35, 35]} />
        <meshLambertMaterial color={0xb4c6fc} flatShading />
      </mesh>
      <mesh position={[35, 0, 20]}>
        <boxGeometry args={[30, 30, 30]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>
      <Wheel x={-35} />
      <Wheel x={5} />
      <Wheel x={37} />
    </group>
  );
}