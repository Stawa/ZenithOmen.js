import { APIResponse, OutputType, SfwRoutes, Version } from "./enums";
import request from "../request";

/**
 * Options for configuring ZenithOmen behavior.
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
   * Create a new Options instance.
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
 * ZenithOmen class for making requests to a specific set of safe-for-work routes.
 * Extends the base request class.
 */
export class ZenithOmen extends request {
  /**
   * The configuration options for ZenithOmen.
   * @type {Options}
   */
  options: Options;

  /**
   * Create a new ZenithOmen instance.
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
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async dare(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.DARE);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async headpat(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HEADPAT);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async highfive(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HIGHFIVE);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async hug(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUG);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async husbando(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUSBANDO);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async neko(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.NEKO);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async poke(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.POKE);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async run(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.RUN);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async slap(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SLAP);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async smile(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SMILE);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async truth(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.TRUTH);
  }

  /**
   * Fetch data for the "bite" route.
   * @returns {Promise<APIResponse>}
   */
  async waifu(): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.WAIFU);
  }

  /**
   * @private
   */
  private async __fetch(route: string): Promise<APIResponse> {
    const response = (await this.get(
      this.options.defaultVersion,
      route,
      this.options.outputType
    )) as APIResponse;

    return new APIResponse(response);
  }
}
