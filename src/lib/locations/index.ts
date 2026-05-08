import { LocationPageContent } from "./types";
export type { LocationPageContent, LocationService, FAQItem } from "./types";

// City data imports
import { phoenix } from "./cities/phoenix";
import { dallas } from "./cities/dallas";
import { houston } from "./cities/houston";
import { denver } from "./cities/denver";
import { atlanta } from "./cities/atlanta";
import { tampa } from "./cities/tampa";
import { nashville } from "./cities/nashville";
import { charlotte } from "./cities/charlotte";
import { austin } from "./cities/austin";
import { sanAntonio } from "./cities/san-antonio";
import { orlando } from "./cities/orlando";
import { lasVegas } from "./cities/las-vegas";
import { chicago } from "./cities/chicago";
import { seattle } from "./cities/seattle";
import { miami } from "./cities/miami";
import { raleigh } from "./cities/raleigh";
import { jacksonville } from "./cities/jacksonville";
import { sanDiego } from "./cities/san-diego";
import { minneapolis } from "./cities/minneapolis";
import { columbus } from "./cities/columbus";

const locationPages: Record<string, LocationPageContent> = {
  phoenix,
  dallas,
  houston,
  denver,
  atlanta,
  tampa,
  nashville,
  charlotte,
  austin,
  "san-antonio": sanAntonio,
  orlando,
  "las-vegas": lasVegas,
  chicago,
  seattle,
  miami,
  raleigh,
  jacksonville,
  "san-diego": sanDiego,
  minneapolis,
  columbus,
};

export function getLocation(slug: string): LocationPageContent | undefined {
  return locationPages[slug];
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(locationPages);
}

export function getAllLocations(): LocationPageContent[] {
  return Object.values(locationPages);
}
