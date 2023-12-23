/**
 * Enum representing different versions.
 */
export enum Version {
  V1 = "v1",
}

/**
 * Enum representing safe-for-work routes.
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
 * Enum representing different output types.
 */
export enum OutputType {
  XML = "xml",
  JSON = "json",
}

/**
 * Represents the response from an API request.
 * @class
 * @classdesc Encapsulates the response data received from an API request.
 */
export class APIResponse {
  /**
   * The URL of the API request.
   * @type {string}
   */
  url: string;

  /**
   * An array of URLs from the API response.
   * @type {string[]}
   */
  urls: string[];

  /**
   * Error messages from the API response.
   * @type {string}
   */
  errorMessages: string;

  /**
   * The HTTP status code of the API response.
   * @type {number}
   */
  status: number;

  /**
   * Create a new APIResponse instance.
   * @constructor
   * @param {object} response - The raw response object from the API.
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
  }
}
