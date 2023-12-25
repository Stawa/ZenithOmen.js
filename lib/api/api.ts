import xml2js from "xml2js";
import { APIResponse, OutputType, SfwRoutes, Version } from "./enums";
import request from "../request";

/**
 * @class Options
 * @classdesc Options for configuring the ZenithOmen function.
 */
export class Options {
  /**
   * The desired output type for API responses.
   * @type {OutputType}
   */
  outputType: OutputType;

  /**
   * The default API version to use.
   * @type {Version}
   */
  defaultVersion: Version;

  /**
   * Create a new instance of Options.
   * @constructor
   * @param {object} options - The configuration options.
   * @param {OutputType} options.outputType - The desired output type (default: JSON).
   * @param {Version} options.defaultVersion - The default API version to use (default: V1).
   */
  constructor(options?: { outputType?: OutputType; defaultVersion?: Version }) {
    const defaultOptions = {
      outputType: OutputType.JSON,
      defaultVersion: Version.V1,
    };
    const opts = { ...defaultOptions, ...options };

    this.outputType = opts.outputType;
    this.defaultVersion = opts.defaultVersion;
  }
}

/**
 * @classdesc ZenithOmen represents a class that allows users to send requests to a specific list of API routes.
 * @extends request Extends the base request class.
 */
export class ZenithOmen extends request {
  /**
   * The configuration options for ZenithOmen.
   * @type {Options}
   */
  options: Options;

  /**
   * Create a new instance of ZenithOmen.
   * @constructor
   * @param {Options} options - The configuration options.
   */
  constructor(options: Options) {
    super();
    this.options = new Options(options);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async bite(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.BITE);
  }

  /**
   * Fetch data for the "dare" route.
   * @returns {Promise<APIResponse>}
   */
  async dare(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.DARE);
  }

  /**
   * Fetch data for the "headpat" route.
   * @returns {Promise<APIResponse>}
   */
  async headpat(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HEADPAT);
  }

  /**
   * Fetch data for the "highfive" route.
   * @returns {Promise<APIResponse>}
   */
  async highfive(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HIGHFIVE);
  }

  /**
   * Fetch data for the "hug" route.
   * @returns {Promise<APIResponse>}
   */
  async hug(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUG);
  }

  /**
   * Fetch data for the "husbando" route.
   * @returns {Promise<APIResponse>}
   */
  async husbando(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUSBANDO);
  }

  /**
   * Fetch data for the "neko" route.
   * @returns {Promise<APIResponse>}
   */
  async neko(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.NEKO);
  }

  /**
   * Fetch data for the "poke" route.
   * @returns {Promise<APIResponse>}
   */
  async poke(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.POKE);
  }

  /**
   * Fetch data for the "run" route.
   * @returns {Promise<APIResponse>}
   */
  async run(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.RUN);
  }

  /**
   * Fetch data for the "slap" route.
   * @returns {Promise<APIResponse>}
   */
  async slap(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SLAP);
  }

  /**
   * Fetch data for the "smile" route.
   * @returns {Promise<APIResponse>}
   */
  async smile(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SMILE);
  }

  /**
   * Fetch data for the "truth" route.
   * @returns {Promise<APIResponse>}
   */
  async truth(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.TRUTH);
  }

  /**
   * Fetch data for the "waifu" route.
   * @returns {Promise<APIResponse>}
   */
  async waifu(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.WAIFU);
  }

  /**
   * Private method to fetch data from the API.
   * @private
   * @param {string} route - The route or endpoint to fetch data from.
   * @returns {Promise<APIResponse>} A promise that resolves to the APIResponse containing the fetched data.
   */
  private async __fetch(route: string): Promise<APIResponse> {
    const { defaultVersion, outputType } = this.options;
    const apiResponse = await this.get(defaultVersion, route, outputType);
    const parsedData =
      outputType === OutputType.JSON
        ? await apiResponse.json()
        : await xml2js.parseStringPromise(await apiResponse.text(), {
            explicitArray: false,
          });

    const responseData =
      outputType !== OutputType.JSON ? parsedData.response : parsedData;

    return new APIResponse(responseData);
  }
}
