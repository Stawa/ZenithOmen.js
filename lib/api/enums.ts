/**
 * Enum representing various API versions.
 */
export enum Version {
  V1 = "v1",
}

/**
 * Enumeration defines routes that are appropriate for a general audience (SFW).
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
 */
export enum OutputType {
  XML = "xml",
  JSON = "json",
}

/**
 * The response from an API request.
 * @class
 * @classdesc Includes the response data from an API request.
 */
export class APIResponse {
  /**
   * The API request's return URL.
   * @type {string}
   */
  url: string;

  /**
   * An array of URLs retrieved from the API response.
   * @type {string[]}
   */
  urls: string[];

  /**
   * The API response error messages.
   * @type {string}
   */
  errorMessages: string;

  /**
   * The API response's HTTP status code.
   * @type {number}
   */
  status: number;

  /**
   * The raw API response, which can be in XML or JSON format.
   * @type {object}
   */
  rawResponse: object;

  /**
   * Create a new instance of APIResponse.
   * @constructor
   * @param {object} response - The API's raw response object.
   */
  constructor(response: {
    url: string;
    urls: string[];
    errorMessages: string;
    status: number;
  }) {
    this.url = response.url;
    this.urls = response.urls;
    this.errorMessages = response.errorMessages;
    this.status = response.status;
    this.rawResponse = response;
  }
}
