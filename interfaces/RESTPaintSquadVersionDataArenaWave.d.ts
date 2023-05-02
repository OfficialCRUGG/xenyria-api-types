import { RESTPaintSquadVersionDataArenaWaveSpawn } from ".";

export interface RESTPaintSquadVersionDataArenaWave {
  room_id: number;
  duration: number;
  spawns: RESTPaintSquadVersionDataArenaWaveSpawn[];
}
