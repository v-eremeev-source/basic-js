import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let sourceString = String(str);
    if (!('repeatTimes' in options) || !options['repeatTimes']) options['repeatTimes'] = 1;
    if (!('addition' in options) || options['addition'] === undefined ) 
        options['addition'] = ''; 
    else 
        options['addition'] = String(options['addition']);
    if (!('separator' in options)  || options['separator'] === undefined ) options['separator'] = '+';
    if (!('additionSeparator' in options)) options['additionSeparator'] = '|';
    if (!('additionRepeatTimes' in options) || !options['additionRepeatTimes']) options['additionRepeatTimes'] = 1;
    let retValue = [];
    if (options['repeatTimes'] > 0){
        retValue = new Array(options['repeatTimes']);
        if (options['additionRepeatTimes'] > 0 ){
            sourceString += (new Array(options['additionRepeatTimes'])).fill(options['addition']).join(options['additionSeparator']);
        }
        retValue.fill(sourceString);
    }
    return retValue.join(options['separator']);
}
