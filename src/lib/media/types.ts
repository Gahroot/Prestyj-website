export type AspectRatio = "16:9" | "1:1" | "4:3" | "9:16";

export type MediaCategory =
  | "hero"
  | "testimonial-portrait"
  | "industry-shot"
  | "result-graphic"
  | "blog-thumbnail"
  | "social-media"
  | "icon-badge"
  | "mascot";

export type Industry =
  | "roofing"
  | "windows"
  | "real-estate"
  | "mortgage"
  | "solar"
  | "hvac"
  | "plumbing"
  | "dental"
  | "legal"
  | "insurance"
  | "home-services"
  | "general";

export type Mood =
  | "triumphant"
  | "focused"
  | "candid"
  | "dynamic"
  | "warm"
  | "confident"
  | "professional";

export interface CategoryConfig {
  readonly category: MediaCategory;
  readonly defaultAspectRatio: AspectRatio;
  readonly outputDir: string;
  readonly description: string;
}

export interface PromptRequest {
  category: MediaCategory;
  subject: string;
  industry?: Industry;
  mood?: Mood;
  customModifiers?: string[];
}

export interface GenerateRequest {
  prompt: string;
  aspectRatio: AspectRatio;
  outputPath: string;
}

export interface ZImageCreateResponse {
  code: number;
  data: {
    taskId: string;
  };
}

export interface ZImageDetailResponse {
  code: number;
  data: {
    status: "processing" | "success" | "failed";
    imageUrl?: string;
    progress?: number;
  };
}

export interface GenerationResult {
  success: boolean;
  outputPath: string;
  prompt: string;
  error?: string;
}
