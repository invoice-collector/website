export interface Collector {
  id: string;
  name: string;
  description: string;
  version: string;
  website: string;
  logo: string;
  type: string;
  params: Record<string, unknown>;
  loginUrl: string;
  captcha: string;
  authenticationMethod: string;
  state: string;
}

export type CollectorSummary = Pick<
  Collector,
  'id' | 'name' | 'description' | 'logo' | 'website' | 'type' | 'state'
>;
