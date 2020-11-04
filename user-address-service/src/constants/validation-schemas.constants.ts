import { Regex } from './regex.constants';

export class ValidationSchemas {
  public static GET_PRODUCTS = {
    "type": "object",
    "properties": {
      "category": {
        "type": "string",
      },
      "sub_category": {
        "type": "string"
      },
      "page_offset": {
        "type": "string",
        "pattern": Regex.NUMBER_STRING
      },
      "page_limit": {
        "type": "string",
        "pattern": Regex.NUMBER_STRING
      }
    },
    "required": [
      "page_offset",
      "page_limit",
    ]
  }
}