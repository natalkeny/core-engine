// types.ts
import { Type } from 'class-transformer';

export enum EngineState {
  STOPPED = 'stopped',
  RUNNING = 'running',
  PAUSED = 'paused',
}

export enum ResourceState {
  IDLE = 'idle',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}

export enum TaskState {
  PENDING = 'pending',
  RUNNING = 'running',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export type Resource = {
  id: string;
  type: string;
  state: ResourceState;
};

export type Task = {
  id: string;
  type: string;
  state: TaskState;
};

export type Engine = {
  id: string;
  state: EngineState;
  resources: Resource[];
  tasks: Task[];
};

export type Scene = {
  id: string;
  name: string;
  resources: Resource[];
  tasks: Task[];
};

export type Asset = {
  id: string;
  type: string;
  path: string;
  state: ResourceState;
};

export type EngineConfig = {
  assets: Asset[];
  scenes: Scene[];
};

export type EngineStats = {
  resources: { [id: string]: ResourceState };
  tasks: { [id: string]: TaskState };
  state: EngineState;
};