// src/types.ts

export type DoubleDeflectionData = {
  type: 'DoubleDeflection';
  model: 'SAR-FH-RV-DD' | 'SAG-FH-RV-DD';
  width: number;
  height: number;
  airflow: number;
  pressureDrop: number;
  throwDistance: string;
  noiseCriteria: number;
  neckVelocity: number | string;
  faceVelocity: number | string;
};

export type LinearBarData = {
  type: 'LinearBar';
  model: 'SLBG' | 'RLBG';
  length: number;
  width: number;
  height: number;
  airflow: number;
  slotCount: number;
};

// Add more product types here as needed

export type ProductData = DoubleDeflectionData | LinearBarData;
