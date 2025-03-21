import { ImageOrientation, ImageOrientationSchema, URL } from '../index';


/**
 * Converts a string to valid parameter number or boolean, else return undefined
 *
 */
export function convertParameterValueFromString(value: string): number | boolean | undefined {
  // boolean
  if (value === 'true') return true;
  if (value === 'false') return false;

  // number
  const numValue = Number(value);
  if (!isNaN(numValue)) return numValue;

  // failed to convert
  return undefined;
}

/**
 * Trims decimals of a float number to specific number
 *
 * By default, trim to 3 deciamals because that's the precision we use comparing VRChat parameter float values
 *
 */
export function trimNumberDecimals(number: number, decimals: number = 3) {
  const calc = Math.pow(10, decimals);
  return Math.floor(number * calc) / calc;
}

/**
 * Return proper full URL to images from UploadedFile urlPath, with exception for blob files.
 *
 */
export function imageUrlPathToUrl(urlPath: string) {
  if (urlPath.startsWith('blob:')) return urlPath;
  return URL + '/' + urlPath;
}


/**
 * Return aspect ratio for css property based on ImageOrientation enum value
 *
 */
export function imageOrientationToAspectRatio(imageOrientation: ImageOrientation) {
  switch (imageOrientation) {
    case ImageOrientationSchema.Values.Square:
      return '4/3';
    case ImageOrientationSchema.Values.Vertical:
      return '3/4';
    case ImageOrientationSchema.Values.Horizontal:
    default:
      return '16/9';
  }
}

/**
 * Return item label or construct a label from item order.
 *
 * For example a ParameterButton might have no (empty) label, but to display it sometimes we need a placeholder text based on order that refers to it (Unnamed parameter #3)
 *
 */
export function getForcedItemLabel(item: { label: string, order: number }, type: 'group' | 'parameter' | 'button' | 'preset' | 'avatar') {
  if (item.label) return item.label;
  return 'Unnamed ' + type + ' #' + item.order;
}

