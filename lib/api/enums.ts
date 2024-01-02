/**
 * Enum representing various API versions.
 * @readonly
 */
export enum Version {
  V1 = "v1",
}

/**
 * Enumeration defines routes that are appropriate for a general audience (SFW).
 * @readonly
 */
export enum SfwRoutes {
  BITE = "sfw/bite",
  DARE = "sfw/dare",
  HEADPAT = "sfw/headpat",
  HIGHFIVE = "sfw/highfive",
  HUG = "sfw/hug",
  HUSBANDO = "sfw/husbando",
  NEKO = "sfw/neko",
  POKE = "sfw/poke",
  RUN = "sfw/run",
  SLAP = "sfw/slap",
  SMILE = "sfw/smile",
  TRUTH = "sfw/truth",
  WAIFU = "sfw/waifu",
}

/**
 * Enumeration of different output API types.
 * @readonly
 * @property {string} XML - Output format in XML.
 * @property {string} JSON - Output format in JSON.
 */
export enum OutputFormat {
  XML = "xml",
  JSON = "json",
}

/**
 * Enumeration of different output content API types.
 * @readonly
 * @property {string} PICTURE - Output content as a picture.
 * @property {string} GIF - Output content as a GIF.
 */
export enum OutputContent {
  PICTURE = "picture",
  GIF = "gif",
}

/**
 * The response from an API request.
 * @class
 * @classdesc Includes the response data from an API request.
 */
export class APIResponse {
  /**
   * The API request's return URL.
   * @type {string | string[]}
   */
  url: string | string[];

  /**
   * The text content returned by the API.
   * @type {string | string[]}
   */
  textContent: string | string[];

  /**
   * The total amount of text available from the API.
   * @type {number}
   */
  textCount: number;

  /**
   * The total amount of images available from the API.
   * @type {number}
   */
  imageCount: number;

  /**
   * The API response error messages.
   * @type {string}
   */
  errorMessages: string;

  /**
   * The API response's HTTP status code.
   * @type {number}
   */
  statusCode: number;

  /**
   * The raw API response, which can be in XML or JSON format.
   * @type {object | string}
   */
  rawResponse: object | string;

  /**
   * Create a new instance of APIResponse.
   * @constructor
   * @param {object | string} response - The API's raw response object.
   */
  constructor(response: {
    url: string | string[];
    textContent: string | string[];
    textCount: number;
    imageCount: number;
    errorMessages: string;
    statusCode: number;
  }) {
    this.url = response.url;
    this.textContent = response.textContent;
    this.textCount = response.textCount;
    this.imageCount = response.imageCount;
    this.errorMessages = response.errorMessages;
    this.statusCode = response.statusCode;
    this.rawResponse = response;
  }
}

/**
 * Represents an object containing dynamically generated enum types.
 * @type {EnumTypes}
 */
export type EnumTypes = {
  Version: keyof typeof Version,
  OutputFormat: keyof typeof OutputFormat,
  OutputContent: keyof typeof OutputContent,
  SfwRoute: keyof typeof SfwRoutes,
};
