/**
 * Spotify API
 * Spotify API
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Tracks } from './tracks.type';


export interface UserTopTracks { 
    items: Array<Tracks>;
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous: string;
    next: string;
}

