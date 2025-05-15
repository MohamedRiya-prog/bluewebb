export interface DoubleDeflectionInput {
  model: 'SAR-FH-RV-DD' | 'SAG-FH-RV-DD';
  width: number;    // mm
  height: number;   // mm
  airflow: number;  // LPS (liters per second)
}

export interface DoubleDeflectionResult {
  type: 'DoubleDeflection';
  model: 'SAR-FH-RV-DD' | 'SAG-FH-RV-DD';
  neckArea: number;       // m²
  faceArea: number;       // m²
  neckVelocity: number | string;   // m/s
  faceVelocity: number | string;   // m/s
  noiseCriteria: number;  // NC (approximate)
  pressureDrop: number;   // Pa
  throwDistance: string;          // m
}

export function calculateDoubleDeflection(data: DoubleDeflectionInput): DoubleDeflectionResult {
  const { model, width, height, airflow } = data;

    // Calculate neck area
    const neckArea = (width * height) //mm²

    // Calculate face area
    const faceArea = (width + 50) * (height + 50); // mm²

    // Calculate airflow to CFM
   const airflowCFM = airflow * 2.118; // LPS to CFM conversion

    // Calculate neck area in square foot
    const neckAreaSqFt = (width * height) / 92903.04; // mm² to ft² conversion

    // constants for Area factor calculation
    const constant =
     neckArea > 127500 ? 0.65 :
    neckArea === 60000 ? 0.52 :
    neckArea === 67500 ? 0.55 :
    neckArea === 75000 ? 0.57 :
    neckArea === 90000 ? 0.58 :
    neckArea === 105000 ? 0.57 :
        0.52;

    // calculate area factor
    const areaFactor = (constant * neckAreaSqFt)/10.764;

    // calcualte face velocity
const faceVelocity = model === 'SAR-FH-RV-DD' ? ((airflow * 0.001) / areaFactor).toFixed(2) : '-';

  
    // calculate neck velocity
    const neckVelocity = ((airflow / 1000) / (((width - 10) / 1000) * ((height - 10) / 1000))).toFixed(2);

    // Calculate pressure drop
    const basePressureDrop = Math.round(
    250 * 1 * 1.9976 *
    Math.pow((airflow * 1000) / ((width - 10) * (height - 10)), 1.9524) / 250 * 100
    ) / 100;

    const pressureDrop =
    model === 'SAR-FH-RV-DD' ? Math.round(basePressureDrop) :
    model === 'SAG-FH-RV-DD' ? Math.round(basePressureDrop * 1.2) :
    0;

    // Calculate noise criteria
    const ln = Math.log;
    const log10 = Math.log10;

    const noiseCriteria = neckArea === 45000
        ? Math.ceil(Math.max(
        -31.6 + 1.28 * ((12.817 * ln(airflowCFM) - 34.473) - 10),
        -18.9 + 1.18 * ((20.022 * ln(airflowCFM) - 79.372) - 10),
        -8.5  + 1.09 * ((25.345 * ln(airflowCFM) - 111.13) - 10),
        -2.2  + 1.02 * ((33.402 * ln(airflowCFM) - 162.09) - 10),
        1.0  + 1.00 * ((37.61  * ln(airflowCFM) - 191.66) - 10),
        3.1  + 0.98 * ((45.646 * ln(airflowCFM) - 250.16) - 10)
        ))
        : Math.ceil(Math.max(
        -31.6 + 1.28 * ((12.817 * ln(airflowCFM * 300 * 150 / neckArea) - 34.473) - 10),
        -18.9 + 1.18 * ((20.022 * ln(airflowCFM * 300 * 150 / neckArea) - 79.372) - 10),
        -8.5  + 1.09 * ((25.345 * ln(airflowCFM * 300 * 150 / neckArea) - 111.13) - 10),
        -2.2  + 1.02 * ((33.402 * ln(airflowCFM * 300 * 150 / neckArea) - 162.09) - 10),
        1.0  + 1.00 * ((37.61  * ln(airflowCFM * 300 * 150 / neckArea) - 191.66) - 10),
        3.1  + 0.98 * ((45.646 * ln(airflowCFM * 300 * 150 / neckArea) - 250.16) - 10)
        ) + 10 * log10(neckArea / 45000));

 // Calculate throw distance
function roundUp(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.ceil(value * factor) / factor;
}

function calculateThrowDistance(width: number, height: number, airflow: number) {
  const sqrtConst = [0.26, 0.379, 0.474];
  let effectiveConst: number;

  if (width === 300 && height === 150) {
    effectiveConst = sqrtConst[0];
  } else if (width === 450 && height === 150) {
    effectiveConst = sqrtConst[1];
  } else if (width === 600 && height === 150) {
    effectiveConst = sqrtConst[2];
  } else {
    effectiveConst = roundUp((0.65 * width * height) / (25 * 25 * 144), 2);
  }

  // Step 1: inner calculation
  const innerCalc = (3.27 * 2.1188 * airflow) / (100 * Math.sqrt(effectiveConst));
  // Step 2: round up innerCalc to 1 decimal
  const innerRounded = roundUp(innerCalc, 1);
  // Step 3: multiply by 12 and 0.025 (12 inches per foot, 0.0254m per inch maybe)
  const multiplied = innerRounded * 12 * 0.025; 
  // Step 4: round up multiplied value to 1 decimal
  const nestedRounded = roundUp(multiplied, 1);

  // Step 5: Multiply by 0.8 (scaling factor from Excel)
  const throw1_meters = 0.8 * nestedRounded;
  // Step 6: Multiply by 1.25 for throw2
  const throw2_meters = 1.25 * throw1_meters;

  // Round the final throws to 1 decimal for match with Excel
  const throw1_final = Math.round(throw1_meters * 10) / 10;
  const throw2_final = Math.round(throw2_meters * 10) / 10;

  return `${throw1_final} - ${throw2_final}`;
}
        const throwDistance = calculateThrowDistance(width, height, airflow);


  return {
    type: 'DoubleDeflection',
    model,
    neckArea,
    faceArea,
    neckVelocity,
    faceVelocity,
    noiseCriteria,
    pressureDrop,
    throwDistance,
  };
}
